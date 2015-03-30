// sum all arguments of a function
function sumArguments() {
	var result = 0;
	for (var ind=0; ind<arguments.length; ind++) {
		result += arguments[ind];
	}
	return result;
}

console.log(sumArguments(5,4,3));
console.log(sumArguments());

exports.sumArguments = sumArguments;

