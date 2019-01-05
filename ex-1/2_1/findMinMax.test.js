const findMinMax = require('./findMinMax')

test('Find second min max', () => {
  expect(findMinMax([1, 2, 3, 4, 5])).toEqual([2, 4]);
});

test('Find second min max 2', () => {
  expect(findMinMax([6, 4, 2, 1, 8, 7])).toEqual([2, 7]);
});
