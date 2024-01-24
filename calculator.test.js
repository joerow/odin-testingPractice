const calculator = require("./calculator");

test("Perform basic calculator add function", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Perform basic calculator subtract function", () => {
  expect(calculator.subtract(2, 3)).toBe(-1);
});

test("Perform basic calculator multiply function", () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test("Perform basic calculator divide function", () => {
  expect(calculator.divide(2, 0.5)).toBe(4);
});
