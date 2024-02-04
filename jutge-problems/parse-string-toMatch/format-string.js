function formatString(inputString) {
  // Ejemplo simple: agregar un prefijo y un sufijo
  let randomNumber = Math.ceil(Math.random() * 100);
  return `${randomNumber}-${inputString}-${randomNumber}`;
}

module.exports = formatString;