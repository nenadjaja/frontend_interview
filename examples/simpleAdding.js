// summ all numbers until the value num
function SimpleAdding(num) {
  // code goes here  
  var result = 0;
  while (num) {
    result = num +result;
    num -= 1;
  }
  return result;
}