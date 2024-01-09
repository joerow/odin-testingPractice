function reverseString(inputString) {
  let outputString = "";
  for (let index = inputString.length; index >= 0; index--) {
    outputString = outputString.concat(inputString.charAt(index));
  }
  return outputString;
}
module.exports = reverseString;
