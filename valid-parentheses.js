function validParentheses(parens) {
  return parens.split('').reduce((count, s) => count < 0 && count || s === '(' && ++count || --count, 0) === 0
}
