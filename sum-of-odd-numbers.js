function rowSumOddNumbers(n) {
  return new Array(n).fill('')
    .map((_, i) => ++i)
    .map((v, i) => {
      return v + i + n * (n - 1)
    }).reduce((acc, val) => acc + val, 0)
}
