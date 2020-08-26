// https://www.codewars.com/kata/5264d2b162488dc400000001/solutions/javascript

function spinWords(sentence){
  return sentence.split(' ').map(w => w.length > 4 ? w.split('').reverse().join('') : w).join(' ')
}
