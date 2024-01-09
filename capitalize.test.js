const capitalize = require("./capitalize");

test("Capitalize a single word", () => {
  expect(capitalize("dog")).toBe("Dog");
});
