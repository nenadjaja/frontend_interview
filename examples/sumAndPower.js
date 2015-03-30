// sum all numbers between the start number and end number
function sum(startNum, endNum) {

}


// calculate base^exponent. example: 3^4 = 3*3*3*3
function power(base, exponent) {
	var result = 1;
	for (var ind=0; ind<exponent; ind++) {
		result *= base;
	}
	return result;
}

console.log(power(3,4));
console.log(power(1,3));