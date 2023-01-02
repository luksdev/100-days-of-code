const findNemo = require('./findNemo');

test('finds Nemo at index 4', () => {
  expect(findNemo('I am finding Nemo !')).toBe('I found Nemo at 4');
});

test('finds Nemo at index 1', () => {
  expect(findNemo('Nemo is me')).toBe('I found Nemo at 1');
});

test('finds Nemo at index 3', () => {
  expect(findNemo('I am Nemo')).toBe('I found Nemo at 3');
});

test('finds Nemo at index 1', () => {
  expect(findNemo('Nemo')).toBe('I found Nemo at 1');
});
