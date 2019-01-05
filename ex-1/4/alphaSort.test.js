const alphaSort = require('./alphaSort')

test('Alpha sort zcabrw', () => {
  expect(alphaSort('zcabrw')).toBe('abcrwz');
});
