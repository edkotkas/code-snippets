function tickets(peopleInLine) {
  let wallet = {
    25: 0,
    50: 0,
    100: 0
  }

  while (peopleInLine.length > 0) {
    const bill = peopleInLine.shift()

    if (bill === 25) {
      wallet[bill] += 1
      continue
    }

    if (bill === 50) {
      wallet[bill] += 1
      wallet[25] -= 1
      continue
    }

    if (bill === 100) {
      if (wallet[50] >= 1 && wallet[25] >= 1) {
        wallet[bill] += 1
        wallet[50] -= 1
        wallet[25] -= 1
      } else {
        wallet[bill] += 1
        wallet[25] -= 3
      }
    }
  }
  return Object.values(wallet).some(c => c < 0) ? 'NO' : 'YES'
}
