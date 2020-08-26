function dirReduc(arr){
  const moves = [arr.shift()]

  while (arr.length > 0) {
    let last = moves[moves.length - 1]
    const direction = arr.shift()

    if (direction !== opposite(last)) {
      moves.push(direction)
      last = direction
    } else {
      moves.pop()
    }
  }

  return moves
}

function opposite(pole) {
  const poles = {
    'NORTH': 'SOUTH',
    'EAST': 'WEST',
    'SOUTH': 'NORTH',
    'WEST': 'EAST'
  }

  return poles[pole]
}
