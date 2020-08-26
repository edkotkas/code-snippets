function scramble(str1, str2) {
  if (str1.length < str2) return false
  for(let i = 0; i < str2.length; i++) {
    const char = str2.charAt(i)

    let items1 = str1.split(char).length - 1
    let items2 = str2.split(char).length - 1

    if (items1 < items2) {
      return false
    }
  }

  return true
}

