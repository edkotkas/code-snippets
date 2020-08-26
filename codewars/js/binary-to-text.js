// https://www.codewars.com/kata/5583d268479559400d000064/solutions/javascript

function binaryToString(binary) {
  if (binary === '') return binary

  const result = []
  binary = binary.split('')
  while (binary.length > 0) {
    let part = binary.splice(0, 8)
    result.push(String.fromCharCode(parseInt(part.join(''), 2)))
  }

  return result.join('')
}

console.log('01001011010101000100100001011000010000100101100101000101', binaryToString('01001011010101000100100001011000010000100101100101000101'))
