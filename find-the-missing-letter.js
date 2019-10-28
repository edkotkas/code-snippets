function findMissingLetter(array) {
  let lesser = 0
  array
    .map(a => a.charCodeAt(0))
    .reduce((acc, val) => val - acc === 2 ? lesser = acc : val)
  return String.fromCharCode(lesser + 1)
}
