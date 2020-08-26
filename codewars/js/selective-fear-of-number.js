// https://www.codewars.com/kata/55b1fd84a24ad00b32000075/solutions/javascript

const days = {
  Monday: (num) => num === 12,
  Tuesday: num => num > 95,
  Wednesday: num => num === 34,
  Thursday: num => num === 0,
  Friday: num => num % 2 === 0,
  Saturday: num => num === 56,
  Sunday: num => num === 666 || num === -666
}

const AmIAfraid = function(day, num){
  const today = days[day]
  return today && today(num)
}

const assert = require('assert')

describe('Fixed Tests', _ => {
  assert.strictEqual(AmIAfraid("Monday", 13), false, 'Should return false')
  assert.strictEqual(AmIAfraid("Sunday", -666), true, 'Should return true')
  assert.strictEqual(AmIAfraid("Tuesday", 2), false, 'Should return false')
  assert.strictEqual(AmIAfraid("Tuesday", 965), true, 'Should return true')
  assert.strictEqual(AmIAfraid("Friday", 2), true, 'Should return true')
})
