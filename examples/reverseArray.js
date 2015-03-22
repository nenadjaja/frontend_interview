// simple method to reverse an array 
var reverseArray = function(arr) {
  if (arr.length == 0)
    return arr; 
  var result = [];
  for (var i=0; i<arr.length; i++) {
    result.push(arr[arr.length-1-i]);
  }
  return result;
}

// test 
a1 = [1,4,7,9];
a2 = ['s','t','r','i','n','g'];
a3 = [1];
a4 = []
console.log(reverseArray(a1));
console.log(reverseArray(a2));
console.log(reverseArray(a3));
console.log(reverseArray(a4));