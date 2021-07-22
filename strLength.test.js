const strLength = require('./strLength');

test('Hello',() => {
  expect(strLength('Hello')).toBe(5);
});

test('Hi', () => {
  expect(strLength('Hi')).toBe(2);
});

test('WTH', () => {
  expect(strLength('pseudo')).toBe(6);
});