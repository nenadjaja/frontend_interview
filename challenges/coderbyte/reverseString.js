// simple methods to reverse a string of characters 
function reverseStr(s) {
  if (s ==" ")
    return "";

  var revStr = '';
  for(var i=0; i<s.length; i++) {
    revStr += s.charAt(s.length-1-i);
  }
  return revStr;
}

function reverseString(s) {
  s = s.split("");
  var result = [];
  for (var i=s.length; i>=0; i--) {
    result.push(s[i]);
  }
  return result.join("");
}

function anotherReverse(s) {
  var result = [];
  for (var i=s.length; i>=0;i--) {
    result.push(s.charAt(i));
  }
  return result.join("");
}

// test all 3 methods
str1 = 'abracadabra';
str3 = 'x';
str2 = '';

console.log(reverseStr(str1));
console.log(reverseStr(str2));
console.log(reverseStr(str3));
console.log("-----------------");
console.log(reverseString(str1));
console.log(reverseString(str2));
console.log(reverseString(str3));
console.log("-----------------");
console.log(anotherReverse(str1));
console.log(anotherReverse(str2));
console.log(anotherReverse(str3));
