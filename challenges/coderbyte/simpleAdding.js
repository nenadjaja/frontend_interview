// summ all numbers until the value num
function simpleAdding(num) {

	if (num < 0) {
		return "Only positive numbers!";
	}
  var result = 0;
  while (num) {
    result = num +result;
    num -= 1;
  }
  return result;
}

console.log(simpleAdding(5));
console.log(simpleAdding(0));
console.log(simpleAdding(-3));

exports.simpleAdding = simpleAdding;