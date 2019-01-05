function factorialLoop(value) {
  let accumulator = value;

  if (value < 0) {
    return -1;
  }

  if (value === 0 || value === 1) {
    return 1;
  }

  while (value > 1) {
    value--;
    accumulator *= value;
  }

  return accumulator
}

module.exports = factorialLoop
