function factorialRecursive(value) {
  if (value < 0) {
    return -1;
  }
  else if (value === 0){
    return 1;
  }

  return (value * factorialRecursive(value - 1))

}

module.exports = factorialRecursive
