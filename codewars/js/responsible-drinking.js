
// https://www.codewars.com/kata/5aee86c5783bb432cd000018/solutions/javascript

console.log('1 shot, 5 beers and 1 glass of wine')


function hydrate(s) {
  const res =  s.match(new RegExp(/(\d{1,9}\s)(?:\w+)/, 'g')).reduce((acc, x) => {
    return acc + Number(x.split(' ')[0])
  }, 0)


  return `${res} ${res > 1 ? 'glasses' : 'glass' } of water`
}

describe("Kata", () => {
  it("Basic tests", () => {
    assert.strictEqual(hydrate("1 beer"), "1 glass of water");
    assert.strictEqual(hydrate("2 glasses of wine and 1 shot"), "3 glasses of water");
    assert.strictEqual(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"), "10 glasses of water");
  });
});
