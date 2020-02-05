/* eslint-env mocha */

const domains = require('..')
const assert = require('assert') // core
const isValidDomain = require('is-valid-domain')

describe('module exports', function () {
  it('should export an array', function () {
    assert.ok(Array.isArray(domains))
  })
})

describe('individual emails', function () {
  for (const i in domains) {
    const domain = domains[i]
    it(`${domain} should be a valid domain`, function () {
      assert.ok(typeof domain === 'string' || domain instanceof String)
      assert.ok(isValidDomain(domain))
    })
  }
})
