// https://www.codewars.com/kata/5e2596a9ad937f002e510435/solutions/javascript

function infected(s) {
  if (!s.includes('1') && !s.includes(0)) {
    return 0
  }

  const total = s.split('').filter(x => x !== 'X').length

  let infected = 0
  s.split('X').map(x => {
    if (x.includes('1')) {
      infected += x.length
    }
  })

  return 100 * total / infected
}


