// https://www.codewars.com/kata/58a66c208b88b2de660000c3/solutions/javascript

function missingValues(arr) {
  const lib = arr.reduce((acc, val) => {
    if (acc[val]) {
      acc[val].push(val)
    } else {
      acc[val] = [val]
    }

    return acc
  }, {})

  const keys = Object.keys(lib)

  let twos = keys.find(k => lib[k].length === 2)
  let ones = keys.find(k => lib[k].length === 1)

  return ones * ones * twos
}


const assert = require('assert')
describe("Basic Tests", function(){
  it("It should works for basic tests.", function(){

    assert.strictEqual(missingValues([1, 1, 1, 2, 2, 3]),18)

    assert.strictEqual(missingValues([96, 56, 24, 46, 75, 46, 75, 21, 46, 21, 75, 96, 56, 96, 56]),12096)

    assert.strictEqual(missingValues([27, 65, 44, 39, 44, 21, 21, 44, 65, 39, 21, 65]),28431)

    assert.strictEqual(missingValues([66, 4, 80, 66, 4, 83, 97, 81, 19, 4, 80, 51, 83, 81, 83, 66, 51, 80, 97, 81, 97]),18411)

    assert.strictEqual(missingValues([60, 76, 86, 76, 86, 53, 60, 88, 71, 71, 71, 86, 88, 76, 88, 17, 60, 26, 17, 17, 26, 53, 98, 53]),249704)

    assert.strictEqual(missingValues([42, 23, 45, 33, 33, 19, 42, 79, 79, 23, 95, 95, 79, 19, 42, 33, 19, 23]),192375)

    assert.strictEqual(missingValues([4, 74, 41, 41, 41, 88, 63, 35, 35, 4, 88, 13, 63, 74, 63, 88, 4, 74]),5915)

  })})
