const caeserCipher = require("./caeserCipher");

test("Shift a single character", () => {
  expect(caeserCipher("a b", 1)).toBe("a b");
});
