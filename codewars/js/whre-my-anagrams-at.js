function anagrams(word, words) {
  return words.filter(w => {
    for(let i = 0; i < w.length; i++) {
      const char = w.charAt(i)

      let items1 = word.split(char).length - 1
      let items2 = w.split(char).length - 1

      if (items1 < items2) {
        return false
      }
    }

    return true
  })
}
