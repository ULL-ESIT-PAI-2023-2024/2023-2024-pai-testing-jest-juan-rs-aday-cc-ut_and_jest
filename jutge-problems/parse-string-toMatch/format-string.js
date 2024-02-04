/**
 * @desc Formats a given input string by adding a random number as a prefix and suffix.
 * @param {string} inputString - The input string to be formatted.
 * @returns {string} The formatted string with a random number as a prefix and suffix.
 */
function formatString(inputString) {
  // Ejemplo simple: agregar un prefijo y un sufijo
  let randomNumber = Math.ceil(Math.random() * 100);
  return `${randomNumber}-${inputString}-${randomNumber}`;
}

module.exports = formatString;