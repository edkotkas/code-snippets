//https://www.codewars.com/kata/59128363e5bc24091a00006f/solutions/javascript

function theJanitor(word) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  return alphabet.map((x, i, a) => {
    const first = word.indexOf(x)
    const last = word.lastIndexOf(x)

    return first > -1 ? (last - first) + 1 : 0
  })
}

const assert = require('assert')

assert.deepEqual(theJanitor("abacaba"), [7, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

assert.deepEqual(theJanitor("likemm"), [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

assert.deepEqual(theJanitor("rkuhsxtflzvytbtwxyarsglibmhfmmikyolfmopbtkzxezjahq"), [30, 27, 0, 0, 1, 29, 1, 46, 8, 1, 41, 27, 12, 0, 5, 1, 1, 20, 17, 35, 1, 1, 1, 39, 22, 37])

assert.deepEqual(theJanitor("ommnommnomm"), [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
