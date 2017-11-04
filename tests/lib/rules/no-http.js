/**
 * @fileoverview disallow the use of HTTP in hyperlinks
 * @author Yuwei <https://github.com/keyfoxth>
 */

'use strict'

// -----------------------------------------------------------------------------
// Requirements
// -----------------------------------------------------------------------------

const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/no-http')

// -----------------------------------------------------------------------------
// Tests
// -----------------------------------------------------------------------------

const tester = new RuleTester()

tester.run('no-http', rule, {
  valid: [
    {
      code: `'https'`
    },
    {
      code: `'http'`
    },
    {
      code: `'//github.com'`
    },
    {
      code: `'https://github.com'`
    },
    {
      code: `'&url=https://github.com'`
    }
  ],
  invalid: [
    {
      code: `'http://github.com'`,
      errors: [{
        message: 'HTTP is not safe enough.'
      }]
    },
    {
      code: `'&url=http://github.com'`,
      errors: [{
        message: 'HTTP is not safe enough.'
      }]
    }
  ]
})
