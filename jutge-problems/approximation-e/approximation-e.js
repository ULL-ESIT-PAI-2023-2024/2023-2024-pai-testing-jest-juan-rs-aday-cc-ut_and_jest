function approximateEulerNumber(terms) {
  if (terms <= 0 || !Number.isInteger(terms)) {
    throw new Error('terms should be a positive integer');
  }
  let euler_number = 1.0;
  let factorial = 1;
  for (let i = 1; i <= terms; i++) {
    factorial *= i;
    euler_number += 1.0 / factorial;
  }
  return euler_number;
}

module.exports = approximateEulerNumber;