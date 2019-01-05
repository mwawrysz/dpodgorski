const getLongestWord = require('./getLongestWord')

test('Get longest word from sentence', () => {
  expect(getLongestWord('This is a very long sentence')).toBe('sentence');
});
