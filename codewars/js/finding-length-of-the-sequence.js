// https://www.codewars.com/kata/5566b0dd450172dfc4000005/solutions/javascript

const lengthOfSequence = function (arr, n) {
  if (arr.length === 1) {
    return 0
  }

  if (!arr.includes(n)) {
    return 0
  }

  if (arr.length === 2 && arr.includes(n)) {
    return 2
  }

  if (arr.filter(x => x === n).length > 2) {
    return 0
  }

  const first = arr.indexOf(n)
  arr.splice(first, 1)
  const second = arr.indexOf(n)

  return second - first + 2
}

const assert = require('assert')
describe('', () => {
  it('', () => {
    assert.strictEqual(lengthOfSequence([1, 1], 1), 2)
    assert.strictEqual(lengthOfSequence([1, 2, 3, 1], 1), 4)
    assert.strictEqual(lengthOfSequence([-7, 5, 0, 2, 9, 5], 5), 5)
    assert.strictEqual(lengthOfSequence([-7, 6, 2, -7, 4], -7), 4)
  })
})
