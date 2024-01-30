// .toBe examples

test("equality matchers", () => {
  expect(2*2).toBe(4);
  expect(4-2).not.toBe(1);
})

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

