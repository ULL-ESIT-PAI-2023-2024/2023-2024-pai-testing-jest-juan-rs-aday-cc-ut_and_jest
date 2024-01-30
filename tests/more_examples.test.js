const mathOperations = require('../src/calculator');

// .toBe examples

test("equality matchers", () => {
  expect(2*2).toBe(4);
  expect(4-2).not.toBe(1);
})

// .toBeCloseTo(number, numDigits?)
test('adding works sanely with decimals', () => {
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
});

// Truthiness (.toBeNull && toBeTruthy)
test("truthy operators", () => {
  let name ="Software testing help"
  let n = null
  expect(n).toBeNull()
  expect(name).not.toBeNull
  // name has a valid value
  expect(name).toBeTruthy()
  // pass - as null is non success
  expect(n).not.toBeTruthy()
  // pass - null treated as false or negative
  expect(n).toBeFalsy()
  // 0 - treated as false
  expect(0).toBeFalsy()
})

// .toBeGreaterThan, .toBeLessThanOrEqual, ...
test("numeric operators", () => {
  let num1 = 100;
  let num2 = -20;
  let num3 = 0;
  // greater than
  expect(num1).toBeGreaterThan(10)
  // less than or equal
  expect(num2).toBeLessThanOrEqual(0)
  // greater than or equal
  expect(num3).toBeGreaterThanOrEqual(0)
})

// .toMatch
test("string matchers",() => {
  let string1 = "software testing help"
  // test for success match
  expect(string1).toMatch(/test/);
  // test for failure match
  expect(string1).not.toMatch(/abc/)
})

// .toHaveBeenCalled()
function drinkAll(callback, flavour) {
  if (flavour !== 'octopus') {
    callback(flavour);
  }
}

describe('drinkAll', () => {
  test('drinks something lemon-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'lemon');
    expect(drink).toHaveBeenCalled();
  });

  test('does not drink something octopus-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'octopus');
    expect(drink).not.toHaveBeenCalled();
  });
});

// .toHaveBeenCalledTimes(number)
test('sum function is called twice', () => {
  // Mock the sum function
  jest.spyOn(mathOperations, 'sum');

  // Call the sum function twice
  mathOperations.sum(2, 3);
  mathOperations.sum(4, 5);

  // Assert that the sum function has been called twice
  expect(mathOperations.sum).toHaveBeenCalledTimes(2);
});

// .toHaveBeenCalledWith(arg1, arg2, ...)
test('sum function is called with specific arguments', () => {
  // Mock the sum function
  jest.spyOn(mathOperations, 'sum');

  // Call the sum function with specific arguments
  mathOperations.sum(2, 3);

  // Assert that the sum function has been called with specific arguments
  expect(mathOperations.sum).toHaveBeenCalledWith(2, 3);

  // Call the sum function with different arguments
  mathOperations.sum(4, 5);

  // Assert that the sum function has been called with different arguments
  expect(mathOperations.sum).toHaveBeenCalledWith(4, 5);
});

// .toHaveReturned()
test('sum function is called and has returned a value', () => {
  // Mock the sum function
  jest.spyOn(mathOperations, 'sum');

  mathOperations.sum(2, 3);

  // Assert that the sum function has returned a value (without specifying the value)
  expect(mathOperations.sum).toHaveReturned();
});

// .toHaveReturnedTimes(number)
test('sum returns twice', () => {
  jest.spyOn(mathOperations, 'sum');

  // Reset the call count for the sum function
  mathOperations.sum.mockClear();

  mathOperations.sum(2, 3);
  mathOperations.sum(5, 4);

  expect(mathOperations.sum).toHaveReturnedTimes(2);
});

// .toHaveReturnedWith(number)
test('sum function is called and returns a specific value', () => {
  // Mock the sum function
  jest.spyOn(mathOperations, 'sum');

  // Call the sum function
  const result = mathOperations.sum(3, 4);

  // Assert that the sum function has returned a specific value (in this case, 7)
  expect(mathOperations.sum).toHaveReturnedWith(7);
});

// .toHaveLength(number)
test('arrayExample has a length of 5', () => {
  const arrayExample = [1, 2, 3, 4, 5];
  expect(arrayExample).toHaveLength(5);
});

// .toHaveProperty(keyPath, value?)
test('carObject has the expected properties', () => {
  const carObject = {
    make: 'Toyota',
    model: 'Corolla',
    features: {
      airConditioning: true
    },
    start: function() {
      return 'Vroom!';
    },
  };

  // Assert that carObject has properties 'make' and 'model'
  expect(carObject).toHaveProperty('make');
  expect(carObject).toHaveProperty('model');

  // Assert that carObject features air conditioning by default
  expect(carObject).toHaveProperty('features.airConditioning', true);

  // Assert that carObject has a method 'start'
  expect(carObject).toHaveProperty('start');
  // Optionally, you can check if 'start' is a function
  expect(typeof carObject.start).toBe('function');
});