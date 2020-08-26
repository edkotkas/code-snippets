const eaters = {
  antelope: ['grass'],
  ['big-fish']: ['little-fish'],
  bug: ['leaves'],
  bear: ['big-fish', 'bug', 'chicken', 'cow', 'leaves', 'sheep'],
  chicken: ['bug'],
  cow: ['grass'],
  fox: ['chicken', 'sheep'],
  giraffe: ['leaves'],
  lion: ['antelope', 'cow'],
  panda: ['leaves'],
  sheep: ['grass']
}

function canEat(one, two, three) {
  if (eaters[one]) {
    if (eaters[one].includes(two)) {
      return two
    }
    if (eaters[one].includes(three))
      return three
  }

  return false
}

const whoEatsWho = function (zoo) {
  let things = zoo.split(',')

  let eaten = []
  let counter = 0
  while(things.length > 0) {
    let ate = canEat(things[counter],  things[counter - 1], things[counter + 1])
    let which = things[counter - 1] === ate ? counter - 1 : counter + 1
    if (ate) {
      eaten.push(`${things[counter]} eats ${ate}`)
      things.splice(which, 1)
      counter = 0
      length = things.length
    } else {
      counter++
    }

    if (!things.some((e, x) => canEat(e,  things[x - 1], things[x + 1]))) {
      return [zoo, ...eaten, things.join(',')]
    }
  }

  return [zoo, eaten, things.join(',')]
}

console.log(whoEatsWho('grass,busker,giraffe,bear,chicken,bug,little-fish,cow,giraffe,panda,leaves,little-fish,big-fish'))
