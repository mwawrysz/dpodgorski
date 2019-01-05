const factorialLoop =  require('./factorialLoop')

test('Factorial Loop 8', () => {
  expect(factorialLoop(8)).toBe(40320);
});

test('Factorial Loop 0', () => {
  expect(factorialLoop(0)).toBe(1);
});

test('Factorial Loop -1', () => {
  expect(factorialLoop(-1)).toBe(-1);
});
