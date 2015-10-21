// return true if an input string is a palindrome
// remove punctuation and make everything lower case

function palindrome(str) {
  var str_no_punctuation = str.replace(/[.,:_\-\/\\()]/g,"");
  var str_lower_case = str_no_punctuation.split(" ").join("").toLowerCase();
  var reversed = str_lower_case.split("").reverse().join("");
  return str_lower_case === reversed;
}

var test = "0_0 (: /-\ :) 0-0";
console.log(palindrome(test));