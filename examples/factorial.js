// write a function that calculates a factorial of the input number
// preferably using recursion
function factorial(num) {
	if (num === 0) {
		return 1;
	} else if (num < 0) {
		return -1;
	} else {
		return num * factorial(num-1);
	}
}

console.log(factorial(5));
console.log(factorial(-4));
console.log(factorial(0));


// without recursion
function factorial2(num) {
	var result = 1;
	if (num === 0) return 1;
  if (num < 0) return -1;
	while(num) {
		result *= num;
		num -= 1;
	}
	return result;
}

console.log(factorial2(8));
console.log(factorial2(-4));
console.log(factorial2(0));

// for jasmine tests
exports.factorial = factorial;
exports.factorial2 = factorial2;