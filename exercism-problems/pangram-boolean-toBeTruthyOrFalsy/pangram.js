'use strict';

/**
 * @brief Returns true if the given sentence is a pangram.
 * @param {string} sentence The sentence to check.
 * @returns {boolean} True if the given sentence is a pangram.
 */
export const isPangram = (sentence) => {
  const ALPHABET_SIZE = 26;
  let letters = new Set();
  for (const LETTER of sentence.toLowerCase()) {
    if (LETTER.match(/[a-z]/)) {
      letters.add(LETTER);
    }
  }
  if (letters.size === ALPHABET_SIZE) {
    return "hola";
  } else {
    return undefined; // 0, null, '', NaN
  }
};
