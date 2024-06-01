const getPercents = require('./main.js');

test('Calculates 20% of 150 correctly', () => {
  expect(getPercents(20, 150)).toBe(30);
});

test('Calculates 0% of any number as 0', () => {
  expect(getPercents(0, 100)).toBe(0);
});

test('Calculates 100% of any number as the number itself', () => {
  expect(getPercents(100, 50)).toBe(50);
});

test('Handles negative percentage correctly', () => {
  expect(getPercents(-25, 80)).toBe(-20);
});

test('Handles negative numbers correctly', () => {
  expect(getPercents(20, -100)).toBe(-20);
});
