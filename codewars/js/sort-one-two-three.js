// https://www.codewars.com/kata/56f4ff45af5b1f8cd100067d/solutions/javascript

require('mocha')
const assert = require('assert')

const nums = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
const tens = {
  2: 'twen',
  3: 'thir',
  4: 'for',
  5: 'fif',
  8: 'eigh'
}

const start = {
  0: '',
  1: '',
  2: 'ty',
  3: ' hundred'
}

function sortByName(ary) {
  const a = ary
    .map(num => {
      if (num === '0') {
        return { num, txt: 'zero' }
      }

      if (num <= nums.length) {
        return { num, txt: `${nums[num - 1]}` }
      }

      return {
        num, txt: num.toString().split('').reduce((acc, p, i, a) => {
          if (p === '0') {
            return acc
          }

          let number =  `${nums[Number(p) - 1]}`
          const position = a.length - i

          let ending = start[position]

          if (position === 2 && tens[Number(p)]) {
            number = tens[Number(p)]
          }


          let rest = `${number}${ending}`

          if (acc.endsWith('onety')) {
            acc = acc.replace('onety', '').trim()
            rest = nums[`1${Number(p) - 1}`]
            console.log('rest', rest)
          }

          if (rest === 'onety' && a[i + 1] === '0') {
            rest = 'ten'
          }

          return `${acc}${rest.trim() ? ' ' : ''}${rest}`.trim()
        }, '')
      }
    })

  const sorted = a.map(x => x.txt).sort()
  return sorted.map(s => a.find(x => x.txt === s).num)
}
