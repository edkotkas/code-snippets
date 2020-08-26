//https://www.codewars.com/kata/54ba84be607a92aa900000f1/solutions/javascript

function isIsogram(str){
  if (!str) {
    return true
  }

  const parts = str.toLowerCase().split('')

  const cont = {}
  for (let s of parts) {
    if (cont[s]) {
      return false
    } else {
      cont[s] = true
    }
  }

  return true
}


const assert = require('assert')

assert.strictEqual( isIsogram("Dermatoglyphics"), true );
assert.strictEqual( isIsogram("isogram"), true );
assert.strictEqual( isIsogram("aba"), false, "same chars may not be adjacent" );
assert.strictEqual( isIsogram("moOse"), false, "same chars may not be same case" );
assert.strictEqual( isIsogram("isIsogram"), false );
assert.strictEqual( isIsogram(""), true, "an empty string is a valid isogram" );
