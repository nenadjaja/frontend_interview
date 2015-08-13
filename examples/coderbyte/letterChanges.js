// it modifies a string: replace every letter with the letter following it in the alphabet
// then capitalize every vowel in this new string and return it
function letterChanges(str) {
  if (str.length === 0)
    return -1;
  str = str.split("").map(function(char) {
    if (char == 'Z')
      return 'a';
    if (char == 'z')
      return 'A';
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

console.log(letterChanges('ABC'));
console.log(letterChanges('Y'));
console.log(letterChanges(''));
console.log(letterChanges('z'));
console.log(letterChanges('Z'));

// for jasmine tests
exports.letterChanges = letterChanges;