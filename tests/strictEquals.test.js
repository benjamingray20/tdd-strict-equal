const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEquals = require('../strictEquals')

describe('Equals', () => {
  describe('strictEquals', () => {
    it('returns true if values are same type and same value', () => {
      //create test data
      const checkNumberOne = 5
      const checkNumberTwo = 5

      //call the function with the test data
      const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

      //make assertions about what should be true
      expect(checkResult).to.equal(true)
    })

    it('returns false when values are same type but different values', () => {
      //create test data
      const checkNumberOne = 5
      const checkNumberTwo = 10

      //call the function with the test data
      const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

      //make assertions about what should be true
      expect(checkResult).to.equal(false)
    })

    it('returns false when values are different types but same value', () => {
      //create test data
      const checkNumberOne = 5
      const checkNumberTwo = '5'

      //call the function with the test data
      const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

      //make assertions about what should be true
      expect(checkResult).to.equal(false)
    })

    it('returns false when values are different types', () => {
      //create test data
      const checkNumberOne = 5
      const checkNumberTwo = '10'

      //call the function with the test data
      const checkResult = strictEquals(checkNumberOne, checkNumberTwo)

      //make assertions about what should be true
      expect(checkResult).to.equal(false)
    })
  })
})