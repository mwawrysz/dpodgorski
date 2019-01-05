const factorialRecursive =  require('./factorialRecursive')

test('Factorial Recursive 8', () => {
  expect(factorialRecursive(8)).toBe(40320);
});

test('Factorial Recursive 0', () => {
  expect(factorialRecursive(0)).toBe(1);
});

test('Factorial Recursive -1', () => {
  expect(factorialRecursive(-1)).toBe(-1);
});
