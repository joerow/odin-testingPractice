function caeserCipher(initString, shiftFactor) {
  let alphabetLowercase = {
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
  ];

  let spreadString = [...initString];
  let numericArray = [];

  spreadString.forEach((character) => {
    if (alphabetLowercase[character] != null) {
      numericArray.push(alphabetLowercase[character]);
      console.log(numericArray);
    } else {
      console.log(false);
    }
  });

  //console.log(alphabetLowercase.includes(spreadString[0]));
}
module.exports = caeserCipher;
