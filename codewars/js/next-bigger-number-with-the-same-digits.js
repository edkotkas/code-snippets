function nextBigger(n){
  let current = n+1
  while (!unique(current, n)) {
    current += 1
  }
  return current
}

function unique(current, n) {
  let splits = n.toString().split('')
  let other = current.toString().split('')

  for (let o of other) {
    const s = splits.indexOf(o)
    if (s > -1) {
      delete splits[s]
    }
  }

  splits = splits.filter( s => s >= 0)

  return splits.length === 0
}






console.log(nextBigger(12)) // 21
console.log(nextBigger(513)) // 531
console.log(nextBigger(2017)) // 2071
console.log(nextBigger(414)) // 441
console.log(nextBigger(144)) // 414
