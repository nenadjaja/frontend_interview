// it modifies a string: replace every letter with the letter following it in the alphabet
// then capitalize every vowel in this new string and return it
function LetterChanges(str) {
  
  str = str.split("").map(function(char) {
    if (char.match(/[A-Za-z]/)) {
      var newChar = String.fromCharCode(char.charCodeAt(0)+1);
      if (newChar.match(/[aeiou]/)) {
        newChar = newChar.toUpperCase();
      }
      return newChar;
    } else {
      return char;
    }
      
  }).join("");
  return str;
}