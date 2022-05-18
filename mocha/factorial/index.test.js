var assert = require('assert');
var Calculate = require('../index.js');

describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if the output is 5! is 120', () => {
      const expectedResult = 120;
      const result = Calculate.factorial(5);
      assert.equal(result, expectedResult);
    }),
    it('test 3! is 6', () => {
      const expectedResult = 6;
      const result = Calculate.factorial(3);
      assert.equal(expectedResult, result);
    }),
    it('returns 1 when you pass in 0', () => {
        const expectedResult = 1;
        const result = Calculate.factorial(0);
        assert.equal(expectedResult, result);
    })
  })
})