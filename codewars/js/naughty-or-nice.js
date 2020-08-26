//https://www.codewars.com/kata/52a6b34e43c2484ac10000cd/solutions/javascript

function getNiceNames(people){
  return people.filter(p => p.wasNice)
}

function getNaughtyNames(people){
  return people.filter(p => !p.wasNice)
}

function justNames(array){
  return array.map(function(e){return e.name});
}

var naughty = [
  {name: 'xDranik', wasNice: false}
];
var nice = [
  {name: 'Santa', wasNice: true},
  {name: 'Warrior reading this kata', wasNice: true}
];


const assert = require('assert')

assert.assert(getNiceNames(naughty), []);
assert.assert(getNaughtyNames(nice), []);

assert.assert(getNiceNames(nice.concat(naughty)), justNames(nice));
assert.assert(getNaughtyNames(nice.concat(naughty)), justNames(naughty));
