// https://www.codewars.com/kata/52ab60b122e82a6375000bad/solutions/javascript

function sortReindeer(reindeerNames){
  return reindeerNames.sort((a, b) => {
    const ax = a.split(' ')[1]
    const bx = b.split(' ')[1]

    return ax > bx
  })
}

const assert = require('assert')

assert.deepEqual(sortReindeer(
  ["Dasher Tonoyan",
    "Dancer Moore",
    "Prancer Chua",
    "Vixen Hall",
    "Comet Karavani",
    "Cupid Foroutan",
    "Donder Jonker",
    "Blitzen Claus"]
  ),
  ["Prancer Chua",
    "Blitzen Claus",
    "Cupid Foroutan",
    "Vixen Hall",
    "Donder Jonker",
    "Comet Karavani",
    "Dancer Moore",
    "Dasher Tonoyan"]
);
