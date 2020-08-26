//https://www.codewars.com/kata/558fa34727c2d274c10000ae/solutions/javascript

const $dict = { E: 1,
  A: 1,
  I: 1,
  O: 1,
  N: 1,
  R: 1,
  T: 1,
  L: 1,
  S: 1,
  U: 1,
  D: 2,
  G: 2,
  B: 3,
  C: 3,
  M: 3,
  P: 3,
  F: 4,
  H: 4,
  V: 4,
  W: 4,
  Y: 4,
  K: 5,
  J: 8,
  X: 8,
  Q: 10,
  Z: 10 }


function scrabbleScore(str){
  return str.split('').map(x => {
    console.log(x, $dict[x.toUpperCase().trim()])
    return Number($dict[x.toUpperCase().trim()]) || 0
  }).reduce((acc, val) => {
    return acc + val
  }, 0)
}

const assert = require('assert')

describe( "Basic tests", function(){

  it( "returns 0 for ''", function(){ assert.strictEqual(scrabbleScore(""), 0) })
  it( 'returns 1 for a', function(){ assert.strictEqual(scrabbleScore('a'), 1) })
  it( 'returns 6 for street', function(){ assert.strictEqual(scrabbleScore("street"), 6) })

  it( 'returns score of " a" (with space)', function(){ assert.strictEqual(scrabbleScore(' a'), 1) })
  it( 'returns 6 for street with whitespaces', function(){ assert.strictEqual(scrabbleScore("st re et"), 6) })

})
