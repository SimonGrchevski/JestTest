const capitalizeFirst = require('./capitalizeFirst');

test('Capitalize 1', () => {
  expect(capitalizeFirst('wHAT')).toBe('WHAT');
});

test('Capitalize 2', () => {
  expect(capitalizeFirst('awesome')).toBe('Awesome');
});