// https://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript

function domainName(url){
  return url.match(/(?:https?:?\/{0,2})?(?:w{3}\.)?(.*?)\.(?:.*?)+/)[1]
}

const assert = require('assert')
describe('test', () => {
  it('should work', () => {
    assert.equal(domainName("http://google.com"), "google");
    assert.equal(domainName("http://google.co.jp"), "google");
    assert.equal(domainName("www.xakep.ru"), "xakep");
    assert.equal(domainName("https://you-tu-be.com"), "you-tu-be");
  })
})
