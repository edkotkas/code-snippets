function queueTime(customers, n) {
  let queue = customers.slice(0, n)
  customers = customers.slice(n)

  while (customers.length > 0) {
    queue[queue.indexOf(Math.min(...queue))] += customers.shift()
  }

  const result = Math.max(...queue)

  return  result > 0 ? result : 0
}

console.log('1', queueTime([], 1))
console.log('2', queueTime([1,2,3,4], 1))
console.log('3', queueTime([2,2,3,3,4,4], 2))
console.log('4', queueTime([1,2,3,4,5], 100))
