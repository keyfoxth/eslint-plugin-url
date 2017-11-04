/**
 * @fileoverview disallow the use of absolute URLs
 * @author Yuwei <https://github.com/keyfoxth>
 */

'use strict'

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

function create (context) {
  function checkUrl (node) {
    const handleRegexp = /http(|s):\/\//i
    const nodeRaw = node.raw

    context.report({
      node,
      message: 'Absolute URLs will be terrible to maintain and debug.',
      fix (fixer) {
        const result = nodeRaw.replace(handleRegexp, '//')
        return fixer.replaceText(node, result)
      }
    })
  }

  function checkString (node) {
    const urlRegexp = /^http(|s):\/\//i

    if (node.value.match(urlRegexp)) {
      checkUrl(node)
    }
  }

  function checkLiteral (node) {
    const sourceCode = context.getSourceCode()
    const token = sourceCode.getFirstToken(node)

    if (token.type === 'String') {
      checkString(node)
    }
  }

  return {
    Literal: checkLiteral
  }
}

// -----------------------------------------------------------------------------
// Rule Definition
// -----------------------------------------------------------------------------

module.exports = {
  create,
  meta: {
    docs: {
      description: 'disallow the use of absolute URLs',
      category: 'Best Practices',
      recommended: true
    },
    fixable: 'code',
    schema: []
  }
}
