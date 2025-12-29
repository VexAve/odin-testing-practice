const { add, subtract, divide, multiply } = require("./calculator");

test("1 + 2 => 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("3 - 2 => 1", () => {
  expect(subtract(3, 2)).toBe(1);
});

test("4 / 2 => 2", () => {
  expect(divide(4, 2)).toBe(2);
});

test("2 * 2 => 4", () => {
  expect(multiply(2, 2)).toBe(4);
});