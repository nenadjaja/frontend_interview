// write a function that implements indexOf
function stringSearch(str, sub) {
	for (var ind=0; ind<str.length; ind++) {
		for (var j=0; j<sub.length; j++) {
			if (str.charAt(ind+j) !== sub.charAt(j)) {
				break;
			} else if (j === sub.length-1) {
				return ind;
			}
		}
	}
	return -1;
}

console.log(stringSearch('hello world', 'hello')); // 0
console.log(stringSearch('hello world', 'world')); // 6
console.log(stringSearch('hello world', 'aaaa'));  // -1
console.log(stringSearch('eeeeeeeeeefffff', 'eeef')); // 7

// for jasmine tests
exports.stringSearch = stringSearch;
