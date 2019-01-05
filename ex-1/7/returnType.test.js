const returnType = require('./returnType')

test('Return type string', () => {
  expect(returnType('zcabrw')).toBe('string');
});

test('Return type number', () => {
  expect(returnType(5)).toBe('number');
});

test('Return type boolean', () => {
  expect(returnType(true)).toBe('boolean');
});

test('Return type object', () => {
  expect(returnType({})).toBe('object');
});

test('Return type of array', () => {
  expect(returnType([])).toBe('object');
});
