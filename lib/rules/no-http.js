/**
 * @fileoverview disallow the use of HTTP in hyperlinks
 * @author Yuwei <https://github.com/keyfoxth>
 */

'use strict'

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

function create (context) {
  function checkUrl (node, urlRegexp) {
    const nodeRaw = node.raw

    context.report({
      node,
      message: 'HTTP is not safe enough.',
      fix (fixer) {
        const result = nodeRaw.replace(urlRegexp, 'https://')
        return fixer.replaceText(node, result)
      }
    })
  }

  function checkString (node) {
    const urlRegexp = /http:\/\//i
    const localRegexp = /(localhost|127\.0\.0\.1)/i
    const nodeValue = node.value

    if (nodeValue.match(urlRegexp) && !nodeValue.match(localRegexp)) {
      checkUrl(node, urlRegexp)
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
      description: 'disallow the use of HTTP in hyperlinks',
      category: 'Best Practices',
      recommended: false
    },
    fixable: 'code',
    schema: []
  }
}
