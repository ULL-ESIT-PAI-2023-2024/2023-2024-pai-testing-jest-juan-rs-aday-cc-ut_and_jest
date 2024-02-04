// @ts-check

import {
  dayRate,
  daysInBudget,
  priceWithMonthlyDiscount,
} from './freelancer-rates';

const DIFFERENCE_PRECISION_IN_DIGITS = 6;

describe('day rate', () => {
  test('at 16/hour', () => {
    const ACTUAL = dayRate(16);
    expect(ACTUAL).toBe(128);
  });

  test('at 25/hour', () => {
    const ACTUAL = dayRate(25);
    expect(ACTUAL).toBe(200);
  });

  test('at 31.40/hour', () => {
    const ACTUAL = dayRate(31.4);
    expect(ACTUAL).toBeCloseTo(251.2, DIFFERENCE_PRECISION_IN_DIGITS);
  });

  test('at 89.89/hour', () => {
    const ACTUAL = dayRate(89.89);
    expect(ACTUAL).toBeCloseTo(719.12, DIFFERENCE_PRECISION_IN_DIGITS);
  });

  test('at 97.654321/hour', () => {
    const ACTUAL = dayRate(97.654321);
    expect(ACTUAL).toBeCloseTo(781.234568, DIFFERENCE_PRECISION_IN_DIGITS);
  });
});

describe('days in budget', () => {
  describe('with a budget of 1280', () => {
    test('at 16/hour', () => {
      const ACTUAL = daysInBudget(1280, 16);
      const EXPECTED = 10;

      expect(ACTUAL).toBeCloseTo(EXPECTED, DIFFERENCE_PRECISION_IN_DIGITS);
    });

    test('at 25/hour', () => {
      const ACTUAL = daysInBudget(1280, 25);
      const EXPECTED = 6;

      expect(ACTUAL).toBeCloseTo(EXPECTED, DIFFERENCE_PRECISION_IN_DIGITS);
    });

    describe('with a budget of 835', () => {
      test('at 12/hour', () => {
        const ACTUAL = daysInBudget(835, 12);
        const EXPECTED = 8;

        expect(ACTUAL).toBeCloseTo(EXPECTED, DIFFERENCE_PRECISION_IN_DIGITS);
      });
    });
  });
});

describe('cost with monthly discount', () => {
  describe('at 16/hour', () => {
    test('for 70 days', () => {
      const ACTUAL = priceWithMonthlyDiscount(16, 70, 0);
      const EXPECTED = 8960;
      expect(ACTUAL).toBeCloseTo(EXPECTED, DIFFERENCE_PRECISION_IN_DIGITS);
    });

    test('for 130 days with 15% discount', () => {
      const ACTUAL = priceWithMonthlyDiscount(16, 130, 0.15);
      const EXPECTED = 14528;
      expect(ACTUAL).toBeCloseTo(EXPECTED, DIFFERENCE_PRECISION_IN_DIGITS);
    });
  });
  describe('at 29.654321/hour', () => {
    test('for 220 days with 11.2%', () => {
      const ACTUAL = priceWithMonthlyDiscount(29.654321, 220, 0.112);
      const EXPECTED = 46347;
      expect(ACTUAL).toBeCloseTo(EXPECTED, DIFFERENCE_PRECISION_IN_DIGITS);
    });

    test('for 155 days with 25.47% discount', () => {
      const ACTUAL = priceWithMonthlyDiscount(29.654321, 155, 0.2547);
      const EXPECTED = 27467;
      expect(ACTUAL).toBeCloseTo(EXPECTED, DIFFERENCE_PRECISION_IN_DIGITS);
    });
  });
});
