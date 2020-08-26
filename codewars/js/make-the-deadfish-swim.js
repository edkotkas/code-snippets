// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/solutions/javascript

function parse( data ) {
  let hold = 0

  return data.split('').reduce((result, cmd) => {
    if (cmd === 'i') {
      hold += 1
    }

    if (cmd === 'd') {
      hold -= 1
    }

    if (cmd === 's') {
      hold *= hold
    }

    if (cmd === 'o') {
      result.push(hold)
    }

    return result
  }, [])
}

const assert = require('assert')
describe('test', () => {
  it ('should work', (() => {
    assert.deepStrictEqual( parse("iiisdoso"), [ 8, 64 ] );
    assert.deepStrictEqual( parse("iiisxxxdoso"), [ 8, 64 ] );
  }))
})


