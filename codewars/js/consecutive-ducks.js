function consecutiveDucks(num) {
  const keeper = [0, 1]

  for (let i = 2; i < (num / 2 + 1); i++) {
    const sumOfKeeper = keeper.reduce((x, val) => {
      return x + val
    }, 0)

    if ((num - sumOfKeeper) % keeper.length === 0) {
      return true
    }

    keeper.push(i)
  }

  return false
}

const assert = require('assert')

describe("Consecutive Ducks", () => {
  it("Check Small Values", () => {
    assert.strictEqual(consecutiveDucks(69), true)
    assert.strictEqual(consecutiveDucks(8), false)
    assert.strictEqual(consecutiveDucks(57), true)
    assert.strictEqual(consecutiveDucks(6), true)
    assert.strictEqual(consecutiveDucks(13), true)
    assert.strictEqual(consecutiveDucks(16), false)
    assert.strictEqual(consecutiveDucks(91), true)
    assert.strictEqual(consecutiveDucks(75), true)
    assert.strictEqual(consecutiveDucks(38), true)
    assert.strictEqual(consecutiveDucks(25), true)
    assert.strictEqual(consecutiveDucks(32), false)
    assert.strictEqual(consecutiveDucks(65), true)
    assert.strictEqual(consecutiveDucks(13), true)
    assert.strictEqual(consecutiveDucks(16), false)
    assert.strictEqual(consecutiveDucks(99), true)
  })
  it("Check Medium Values", () => {
    assert.strictEqual(consecutiveDucks(522), true)
    assert.strictEqual(consecutiveDucks(974), true)
    assert.strictEqual(consecutiveDucks(755), true)
    assert.strictEqual(consecutiveDucks(512), false)
    assert.strictEqual(consecutiveDucks(739), true)
    assert.strictEqual(consecutiveDucks(1006), true)
    assert.strictEqual(consecutiveDucks(838), true)
    assert.strictEqual(consecutiveDucks(1092), true)
    assert.strictEqual(consecutiveDucks(727), true)
    assert.strictEqual(consecutiveDucks(648), true)
    assert.strictEqual(consecutiveDucks(1024), false)
    assert.strictEqual(consecutiveDucks(851), true)
    assert.strictEqual(consecutiveDucks(541), true)
    assert.strictEqual(consecutiveDucks(1011), true)
    assert.strictEqual(consecutiveDucks(822), true)
  })
  it("Check Large Values", () => {
    assert.strictEqual(consecutiveDucks(382131), true)
    assert.strictEqual(consecutiveDucks(118070), true)
    assert.strictEqual(consecutiveDucks(17209), true)
    assert.strictEqual(consecutiveDucks(32768), false)
    assert.strictEqual(consecutiveDucks(161997), true)
    assert.strictEqual(consecutiveDucks(400779), true)
    assert.strictEqual(consecutiveDucks(198331), true)
    assert.strictEqual(consecutiveDucks(325482), true)
    assert.strictEqual(consecutiveDucks(88441), true)
    assert.strictEqual(consecutiveDucks(648), true)
    assert.strictEqual(consecutiveDucks(65536), false)
    assert.strictEqual(consecutiveDucks(323744), true)
    assert.strictEqual(consecutiveDucks(183540), true)
    assert.strictEqual(consecutiveDucks(65271), true)
    assert.strictEqual(consecutiveDucks(5263987), true)
  })
})
