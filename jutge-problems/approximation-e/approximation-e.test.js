const approximateEulerNumber = require('./approximation-e.js');

describe('approximateEulerNumber', () => {
  test('approximateEulerNumber(1) should return 2', () => {
    expect(approximateEulerNumber(1)).toBe(2);
  });

  test('approximateEulerNumber(2) should return 2.5', () => {
    expect(approximateEulerNumber(2)).toBe(2.5);
  });

  test('approximateEulerNumber(3) should return 2.6666666666666665', () => {
    expect(approximateEulerNumber(3)).toBeCloseTo(2.666, 2)
  });

  test('terms should be a positive integer', () => {
    expect(() => approximateEulerNumber(-1)).toThrow();
    expect(() => approximateEulerNumber(0)).toThrow();
    expect(() => approximateEulerNumber(1.5)).toThrow();
    expect(() => approximateEulerNumber('a')).toThrow();
  });
});