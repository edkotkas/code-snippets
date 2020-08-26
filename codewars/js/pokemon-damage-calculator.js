const { assert } = require("chai")

const fire = {
  effective: ['grass'],
  weak: ['water'],
  neutral: ['electric']
}

const water = {
  effective: ['fire'],
  weak: ['grass', 'electric'],
  neutral: []
}

const grass = {
  effective: ['water'],
  weak: ['fire'],
  neutral: ['electric']
}

const electric = {
  effective: ['water'],
  weak: [],
  neutral: ['fire', 'grass']
}

const effects = {
  effective: 2,
  neutral: 1,
  weak: 0.5
}

const types = { fire, water, grass, electric }

function getEffectiveness(you, opponent) {
  if (you === opponent) {
    return 0.5
  }

  const effectiveness = types[you]

  const effect = Object.keys(effectiveness).find(k => effectiveness[k].includes(opponent))

  return effects[effect]
}

function calculateDamage(yourType, opponentType, attack, defense) {
  return 50 * (attack / defense) * getEffectiveness(yourType, opponentType)
}

describe("Sample tests", () => {
  it("Tests", () => {
    assert.equal(calculateDamage("fire", "water", 100, 100), 25)
    assert.equal(calculateDamage("grass", "water", 100, 100), 100)
    assert.equal(calculateDamage("electric", "fire", 100, 100), 50)
    assert.equal(calculateDamage("grass", "electric", 57, 19), 150)
    assert.equal(calculateDamage("grass", "water", 40, 40), 100)
    assert.equal(calculateDamage("grass", "fire", 35, 5), 175)
    assert.equal(calculateDamage("fire", "electric", 10, 2), 250)
    assert.equal(calculateDamage("fire", 'fire',  53, 1), 1325)
  })
})
