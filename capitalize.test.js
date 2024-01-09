const capitalize = require("./capitalize");

test("Capitalize a single word string", () => {
  expect(capitalize("dog")).toBe("Dog");
});
