function findLongestWord(str) {
  var word_len, longest_word;
  var longest_ind = 0;
  var words = str.split(" ");
  for (var ind=0; ind<words.length; ind++) {
    word_len = words[ind].length;
    if (word_len > longest_ind) {
      longest_ind = word_len;
    }
  }
  return longest_ind;
}
