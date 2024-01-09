function capitalize(inputString) {
  let char = inputString[0].toUpperCase();
  let outputString = char.concat(inputString.slice(1));
  return outputString;
}
module.exports = capitalize;
