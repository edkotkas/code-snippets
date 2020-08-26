// https://www.codewars.com/kata/520b9d2ad5c005041100000f/solutions/javascript

const assert = require('assert')

function pigIt(str){
  return str.split(' ').map(s => {
    let [first, ...rest] = s.split('')

    return `${rest.join('')}${first}${/[!,.?]/.test(first) ? '' : 'ay'}`
  }).join(' ')
}

describe('test', () => {
  assert.strictEqual(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
  assert.strictEqual(pigIt('This is my string'),'hisTay siay ymay tringsay')
  assert.strictEqual(pigIt('Hello world !'),'elloHay orldway !')
})
