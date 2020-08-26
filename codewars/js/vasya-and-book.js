function bookIsDay(pages, days) {
  let counter = 0
  while (pages > 0) {
    if (counter > 6) {
      counter = 0
    }
    pages = pages - days[counter]
    counter++
  }

  return counter
}
