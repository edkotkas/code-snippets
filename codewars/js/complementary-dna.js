//https://www.codewars.com/kata/554e4a2f232cdd87d9000038/solutions/javascript

function DNAStrand(dna){
  const complements = {
    A: 'T',
    C: 'G',
    T: 'A',
    G: 'C'
  }

  return dna.split('').map(x => complements[x]).join('')
}

const assert = require('assert')
describe('', () => {
  assert.strictEqual(DNAStrand("AAAA"),"TTTT","String AAAA is");
  assert.strictEqual(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
  assert.strictEqual(DNAStrand("GTAT"),"CATA","String GTAT is");
})
