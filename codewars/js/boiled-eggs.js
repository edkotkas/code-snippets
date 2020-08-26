//https://www.codewars.com/kata/52b5247074ea613a09000164/solutions/javascript

function cookingTime(eggs) {
  return Math.ceil((eggs / 8)) * 5
}

const assert = require('assert')
describe('Boiled Eggs', function() {
  it('should calculate the cooking time', function() {
    assert.strictEqual(cookingTime(0), 0, '0 eggs');
    assert.strictEqual(cookingTime(5), 5, '5 eggs');
    assert.strictEqual(cookingTime(10), 10, '10 eggs');
  });
});
