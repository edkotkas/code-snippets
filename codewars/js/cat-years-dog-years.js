
const ownedCatAndDog = function(catYears, dogYears) {
  let kitty = 0
  let doggy = 0

  while (catYears > 0) {
    if (catYears >= 15 && kitty < 1) {
      catYears -= 15
      kitty += 1
    }

    else if (catYears >= 9 && kitty === 1) {
      catYears -= 9
      kitty += 1
    }

    else if (catYears >= 4 && kitty >= 2) {
      catYears -= 4
      kitty += 1
    }

    else {
      break
    }
  }

  while (dogYears > 0) {
    if (dogYears >= 15 && doggy < 1) {
      dogYears -= 15
      doggy += 1
    }

    else if (dogYears >= 9 && doggy === 1) {
      dogYears -= 9
      doggy += 1
    }

    else if (dogYears >= 5 && doggy >= 2) {
      dogYears -=5
      doggy += 1
    }

    else {
      break
    }
  }


  return [kitty, doggy]
}


const assert = require('assert')

describe("Example Tests", function() {

  it("one", function() {
    assert.deepEqual(ownedCatAndDog(15,15), [1,1]);
  });

  it("two", function() {
    assert.deepEqual(ownedCatAndDog(24,24), [2,2]);
  });

  it("ten", function() {
    assert.deepEqual(ownedCatAndDog(56,64), [10,10]);
  });

});

