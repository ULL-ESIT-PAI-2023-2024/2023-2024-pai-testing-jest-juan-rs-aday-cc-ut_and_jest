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

// .toMatch(regexp | string)
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

// .toBeDefined()
test('exampleObject properties are defined', () => {
  const exampleObject = {
    property1: 'Hello'
  };
  // Assert that property1 is defined
  expect(exampleObject.property1).toBeDefined();
});

// .toBeUndefined()
test('expecting undefined to be undefined', () => {
  expect(undefined).toBeUndefined();
})

// .toBeFalsy()
test('falsyExample properties are falsy', () => {
  const falsyExample = {
    falsyProperty: 0,
    truthyProperty: 'Hello'
  };
  // Assert that falsyProperty is falsy
  expect(falsyExample.falsyProperty).toBeFalsy();

  // Assert that truthyProperty is not falsy (truthy)
  expect(falsyExample.truthyProperty).not.toBeFalsy();
});

// .toBeInstanceOf(Class)
test('isIntance of a class', () => {
  class A {}

  expect(new A()).toBeInstanceOf(A);
  expect(() => {}).toBeInstanceOf(Function);
});

// .toBeNaN()
test('passes when value is NaN', () => {
  expect(NaN).toBeNaN();
  expect(1).not.toBeNaN();
});

// .toContain(item)
test('arrayExample contains specific items', () => {
  const arrayExample = ['apple', 'banana', 'orange'];
  // Assert that the arrayExample includes 'banana'
  expect(arrayExample).toContain('banana');

  expect(arrayExample).not.toContain('kiwi');
});

// .toEqual(value)
test('2 variables are equal', () => {
  const number1 = 10;
  const number2 = number1;
  expect(number1).toEqual(number2);
})

// .toStrictEqual(value)
class LaCroix {
  constructor(flavor) {
    this.flavor = flavor;
  }
}

describe('the La Croix cans on my desk', () => {
  test('are not semantically the same', () => {
    expect(new LaCroix('lemon')).toEqual({flavor: 'lemon'});
    expect(new LaCroix('lemon')).not.toStrictEqual({flavor: 'lemon'});
  });
});

// .toThrow(error?)
function throwErrorExample() {
  throw new Error('This is a custom error message');
}

test('throwErrorExample throws an error', () => {
  // Assert that throwErrorExample throws an error
  expect(() => throwErrorExample()).toThrow();
});