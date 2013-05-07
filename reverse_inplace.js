// reverse an array in place
function revArray(a) {
  if (a.length == 0)
    return a;
  var temp;
  var len = a.length;
  for (var i=0; i<len/2; i++) {
    temp = a[i];
    a[i] = a[len-1-i];
    a[len-1-i] = temp;
  }
  return a;
}

// tests 
a1 = [1,2,3,4,5,6];
a2 = ['g','e','h','e','n'];
a3 = [13];
a4 = [];
console.log(revArray(a1));
console.log(revArray(a2));
console.log(revArray(a3));
console.log(revArray(a4));