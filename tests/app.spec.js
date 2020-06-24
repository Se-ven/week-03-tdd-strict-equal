// Strict equality test
const assert = require('assert')
const app = require('../app.js')

describe('Strict Equality Tester', function () {
    it('Tests the type and value equality of two variables.', function () {
        const vars = app.vars


        assert.strictEqual(vars, 5)
    })
})


