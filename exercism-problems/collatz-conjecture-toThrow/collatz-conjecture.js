'use strict';

/**
 * @brief Returns the number of steps it takes to reach 1 using the Collatz Conjecture.
 * @param {number} number The number to start with.
 * @return {number} The number of steps it takes to reach 1.
 */
export const steps = (number) => {
  let steps = 0;
  while (number > 1) {
    if (number % 2 === 0) {
      number /= 2;
    } else {
      number = number * 3 + 1;
    }
    steps++;
  }
  if (number < 1) {
    throw new Error('Only positive numbers are allowed');
  }
  return steps;
};
