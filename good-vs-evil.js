function goodVsEvil(good, evil) {
  const goodRaces = [1, 2, 3, 3, 4, 10]
  const evilRaces = [1, 2, 2, 2, 3, 5, 10]

  const g = good.split(' ').reduce((acc, val, index) => (goodRaces[index] * val) + acc, 0)
  const e = evil.split(' ').reduce((acc, val, index) => (evilRaces[index] * val) + acc, 0)


  return g === e
    ? 'Battle Result: No victor on this battle field'
    : g > e
      ? 'Battle Result: Good triumphs over Evil'
      : 'Battle Result: Evil eradicates all trace of Good'
}
