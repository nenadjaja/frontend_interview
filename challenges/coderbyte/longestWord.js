// find longest word in a string, without puncuation signs
function longestWord(sen) {
  sen = sen.replace(/[^a-zA-Z-]/g, ' ');
  var max_len = 0;
  var longest;
  sen.split(" ").forEach(function(word) {
      if (word.length > max_len) {
          max_len = word.length;
          longest = word;
      }
  })
    return longest;
}
