const capitalize = require("./capitalize");

test("hello => Hello", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Dylan => Dylan", () => {
  expect(capitalize("Dylan")).toBe("Dylan");
});

test("4pac => 4pac", () => {
  expect(capitalize("4pac")).toBe("4pac");
});

test("(nothing) => (nothing)", () => {
  expect(capitalize("")).toBe("");
});
