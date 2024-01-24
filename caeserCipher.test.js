const caeserCipher = require("./caeserCipher");

test("Shift a single character", () => {
  expect(caeserCipher("b", 1)).toBe("c");
});
