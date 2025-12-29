const caesarCipher = require("./caesar-cipher");

test("(xyz, 3) => abc", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("(HeLLo, 3) => KhOOr", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("(Hello, World!, 3) => Khoor, Zruog!", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});