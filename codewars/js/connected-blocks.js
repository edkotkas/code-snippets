function solution(input) {
  const dots = input.split(',')
    .filter(d => d.length === 2)
    .map(d => d.split('').map(d => Number(d)))
    .filter(d => !d.some(isNaN) && d.length === 2)
    .reduce((acc, val, index, arr) => {
      let [x, y] = val
      // if (!blocks.includes(`${x}${y}`)) {
      //   return
      // }
      //
      // if (!connections.includes(`${x}${y}`)) {
      //   connections.push(`${x}${y}`)
      // }
      //
      // return connections

      const reference = arr.map(a => a.join(''))
      const connections = []
      const doIt = (t, x, y) => {
        doIt([x, y - 1])
        if (reference.includes(t.join(''))) {
          if (!connections.includes(t.join(''))) {
            connections.push(t.join(''))

            doIt([x, y - 1])
            doIt([x, y + 1])
            doIt([x - 1, y])
            doIt([x + 1, y])
          }


        }
      }

      doIt([x, y])

      // let t = top(x, y)
      // while (reference.includes(t.join(''))) {
      //   connections.push(t.join(''))
      //   t = top(x, y)
      // }

      // console.log('connections', connections)

      acc.push(connections)

      return acc
    }, [])

  console.log('dots', dots)

  return dots
    .reduce((acc, val) => {
      if (acc < val.length) {
        return val.length
      }

      return acc
    }, 0)
}

// console.log(solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00'))

const assert = require('assert')
// assert.strictEqual(solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00'), 3)
assert.strictEqual(solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00,46'), 6)
// assert.strictEqual(solution('18,00,01,02,95,40,36,26,57,48,54,65,76,87,97,47,00'), 3)
// assert.strictEqual(solution('18'), 1)
// assert.strictEqual(solution(''), 0)
// assert.strictEqual(solution('1,a1,-10,100'), 0)
// assert.strictEqual(solution('18,00,95,40,36,26,57,48,54,65,76,87,97,47,00,98,910,911,912,92,93'), 3)

