const { TestWatcher } = require('jest');
const Calculator = require('./calc');

describe('Calculator', () => {
  test('Test 1', () => {
    expect(Calculator.add(1,3)).toBe(4);
  });

  test('Test 2', () => {
    expect(Calculator.multiply(2, 5)).toBe(10);
  });

  test('Test 3', () => {
    expect(Calculator.divide(10, 3)).toBeCloseTo(3.333333);
  });

  test('Test 4', () => {
    expect(Calculator.subtract(13, 3)).toBe(10);
  });
});