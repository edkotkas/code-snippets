function pidgeyCalc ( pidgeys, candy ) {
  let evolutions = 0
  while (pidgeys - 1 >= 0) {
    // candy - 12 >= 0 &&
    if (candy < 12 && pidgeys > candy) {
      pidgeys -= 1
      candy += 1
    } else {
      pidgeys -= 1
      candy -= 11
      evolutions += 1
    }
  }

  return evolutions * 500
}

console.log('pidgeyCalc(13, 144), 6500)', pidgeyCalc(13, 144), 6500)
// const assert = require('assert')
// describe("Basic Tests", function(){
//   // assert.strictEqual(pidgeyCalc(1, 12), 500)
//   assert.strictEqual(pidgeyCalc(13, 144), 6500)
//   // assert.strictEqual(pidgeyCalc(10, 63), 3000)
//   // assert.strictEqual(pidgeyCalc(1, 63), 500)
//   // assert.strictEqual(pidgeyCalc(63, 1), 2500)
//   // assert.strictEqual(pidgeyCalc(0, 0), 0)
// });
