'use strict';

/**
 * @desc Approximates the Euler's number (e) using the specified number of terms in the series.
 * @param {number} terms - The number of terms to use in the approximation (should be a positive integer).
 * @throws {Error} If terms is not a positive integer.
 * @returns {number} The approximate value of Euler's number.
 */
function approximateEulerNumber(terms) {
  if (terms <= 0 || !Number.isInteger(terms)) {
    throw new Error('terms should be a positive integer');
  }
  let eulerNumber = 1.0;
  let factorial = 1;
  for (let i = 1; i <= terms; i++) {
    factorial *= i;
    eulerNumber += 1.0 / factorial;
  }
  return eulerNumber;
}

module.exports = approximateEulerNumber;