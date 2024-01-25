function caeserCipher(initString, shiftFactor) {
  /* let alphabetLowercase = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let alphabetUppercase = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ]; */

  const myMap = new Map();
  myMap.set("a", 1);
  myMap.set("b", 2);

  // flatten the string to characters
  let spreadString = [...initString];
  console.log(spreadString);

  //iterate through the letters and convert the characters
  //to numbers if they exist in the map, else leave them untouched

  //TODO only converting the first char and just returning the others.
  function charToNum(char) {
    for (const [key, value] of myMap) {
      if (key === char) {
        return value;
      } else {
      }
      return char;
    }
  }
  //iterate through the character array converting any allowed chars
  //to numbers and adding them to the numeric array
  let numericArray = [];
  spreadString.forEach((element) => {
    numericArray.push(charToNum(element));
  });

  console.log(numericArray);

  function numShift(params) {}

  //iterate through the letters and convert the characters
  //to numbers if they exist in the map, else leave them untouched
  function numToChar(num) {
    for (const [key, value] of myMap) {
      if (value === num) {
        return key;
      } else {
        return num;
      }
    }
  }
  //iterate through the character array converting any allowed chars
  //to numbers and adding them to the numeric array
  let chipherString = "";
  numericArray.forEach((number) => {
    chipherString += numToChar(number);
  });

  console.log(chipherString);

  function buildCipherString(params) {}

  /*   function shiftValues(array, shiftFactor) {}
   */
  /*   function charToNum(char) {
    if (alphabetLowercase[char] != null) {
      return alphabetLowercase[char];
    } else {
      console.log(false);
    }
  } */

  /*   function numToChar(object, value) {
    for (let prop in object) {
      if (object.hasOwnProperty(prop)) {
        if (object[prop] === value) return prop;
      }
    }
  } */

  /*   numericArray = spreadString.map(charToNum);
   */
  /*   for (const value of object.values()) {
  } */

  /*   chipherString = chipherString.push();
   */ return chipherString;

  /* 
  spreadString.forEach((character) => {
    if (alphabetLowercase[character] != null) {
      numericArray.push(alphabetLowercase[character]);
      console.log(numericArray);
    } else {
      console.log(false);
    } */
}

//console.log(alphabetLowercase.includes(spreadString[0]));

// TODO try https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#iterating_map_with_for...of
module.exports = caeserCipher;
