/**
 * 
 * @param {String} string 
 * @returns true/false palindrome
 */
const palindromes = function (string) {
  return string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase() === 
  string
    .replace(/[^a-zA-Z0-9]/g, "")
    .split("")
    .reverse()
    .join("")
    .toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
