function findLongestWord(str) {
  if (str.length === 0 || str.length === 1) {
    return str.length;
  }
  var word_len, longest_word;
  var longest_len = 0;
  var words = str.split(" ");

  for (var ind=0; ind<words.length; ind++) {
    word_len = words[ind].length;
    if (word_len > longest_len) {
      longest_len = word_len;
    }
  }
  return longest_len;
}

console.log(findLongestWord("I am the longest word"));
console.log(findLongestWord(""));
console.log(findLongestWord("a"));
console.log(findLongestWord("a a"));

exports.findLongestWord = findLongestWord;