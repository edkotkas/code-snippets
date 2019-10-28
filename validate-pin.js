function validatePIN (pin) {
  return new RegExp(/^\d{4}$|^\d{6}$/).test(pin)
}
