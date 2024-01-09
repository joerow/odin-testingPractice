const reverseString = require("./reverseString");

test("Reverse a single word string", () => {
  expect(reverseString("dog")).toBe("god");
});
