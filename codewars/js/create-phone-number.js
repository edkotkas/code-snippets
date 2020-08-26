// https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript

const assert = require('assert')

function createPhoneNumber(numbers){
  return `(${numbers.splice(0,3).join('')}) ${numbers.splice(0,3).join('')}-${numbers.join('')}`
}


describe('Basic tests', () => {
  assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
  assert.equal(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111")
  assert.equal(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
});
