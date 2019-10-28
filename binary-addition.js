function addBinary(a,b) {
  return magic(a + b, '')
}

function magic(num, results) {
  if (num === 1) {
    return `1${results}`
  }
  if (num % 2 === 0) {
    return magic(num / 2, `0${results}`)
  } else {
    return magic(Math.floor(num / 2), `1${results}`)
  }
}
