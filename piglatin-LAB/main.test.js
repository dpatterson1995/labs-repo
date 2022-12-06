let main = require("./main");

test("words that start with an a", () => {
  let result = main.Translate("apple");

  expect(result).toBe("appleway");
});

test("words that start with an e", () => {
  let result = main.Translate("error");

  expect(result).toBe("errorway");
});

test("words that start with an i", () => {
  let result = main.Translate("international");

  expect(result).toBe("internationalway");
});

test("words that start with an o", () => {
  let result = main.Translate("opossum");

  expect(result).toBe("opossumway");
});

test("words that start with an u", () => {
  let result = main.Translate("united");

  expect(result).toBe("unitedway");
});
///////////////////////////////////////Capital vowel///////////////////////////////////////////////////////////////////////////////////////
test("words that start with a capital vowel", () => {
  let result = main.Translate("Apple");

  expect(result).toBe("appleway");
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
test("words that start with 1 consonant", () => {
  let result = main.Translate("california");

  expect(result).toBe("aliforniacay");
});

test("words that start with 1 consonant", () => {
  let result = main.Translate("money");

  expect(result).toBe("oneymay");
});

test("words that start with 1 consonant", () => {
  let result = main.Translate("rabbit");

  expect(result).toBe("abbitray");
});

test("words that start with 1 consonant", () => {
  let result = main.Translate("splash");

  expect(result).toBe("ashsplay");
});
