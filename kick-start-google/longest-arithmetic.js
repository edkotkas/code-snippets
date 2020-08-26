function max(input) {
  let parts = input.split('\n').map(x => x.trim()).filter(x => x)

  const cases = parts.shift()

  const result = []
  for (let i = 0; i < cases; i++) {
    const [length, array, ...rest] = parts
    parts = rest

    const numbers = array
      .split(' ')
      .map(x => x.trim())
      .filter(x => x)
      .map(x => Number(x))

    if (numbers.length == length) {
      let attempts = [], last, cursor = 0
      for (let n = 0; n < numbers.length; n++) {
        const current = numbers[n]
        const next = numbers[n + 1]
        if (next > -1) {
          const diff = current - next
          if (diff === last) {
            attempts[cursor].push(diff)
            last = diff
          } else {
            last = diff
            cursor++
            attempts[cursor] = [diff]
          }
        }
      }

      result.push({
        case: i + 1,
        longest: attempts.reduce((acc, val) => val.length > acc ? val.length : acc, 0) + 1
      })
    }
  }

  console.log(result
    .map(r => `Case #${r.case}: ${r.longest}`)
    .join('\n'))
}


const stdin = process.openStdin();

stdin.addListener("data", function (d) {
  max(d.toString())
})

/*
example input & output:

4
7
10 7 4 6 8 10 11
4
9 7 5 3
9
5 5 4 5 5 5 4 5 6
10
5 4 3 2 1 2 3 4 5 6


Case #1: 4
Case #2: 4
Case #3: 3
Case #4: 6
 */
