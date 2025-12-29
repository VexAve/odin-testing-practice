const reverseString = require("./reverse-string");

test("hello => olleh", () => {
  expect(reverseString("hello")).toBe("olleh");
});

test("dylan hans => snah nalyd", () => {
  expect(reverseString("dylan hans")).toBe("snah nalyd");
});

test("(nothing) => (nothing)", () => {
  expect(reverseString("")).toBe("");
});