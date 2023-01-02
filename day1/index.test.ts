const calcAge = require('./index')

test('adds age of 65 and return 23725', () => {
  expect(calcAge(65)).toBe(23725);
})

test('adds age of 0 and return 0', () => {
  expect(calcAge(0)).toBe(0);
})

test('adds age of 20 and return 7300', () => {
  expect(calcAge(20)).toBe(7300);
})

