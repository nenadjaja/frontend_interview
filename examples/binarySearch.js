// find an element in a sorted list using binary search algorithm
// and return the index of that element
function binarySearch(list, elem) {
	if (list.length === 1 && list[0] === elem)
		return 0;
	if (list.length === 0)
		return -1;
	var lo = 0;
	var hi = list.length-1;
	while (lo <= hi) {
		var med = Math.floor((hi-lo)/2) + lo;
		if (elem === list[med]) {
			return med;
		} else if (elem < list[med]) {
			hi = med - 1;
		} else {
			lo = med + 1;
		}
	}
	return -1;
}


// examples
console.log(binarySearch([1,3,5,7,9,11,13],3)); // 1
console.log(binarySearch([], 2)); // -1
console.log(binarySearch([10],10)); // 0
console.log(binarySearch([7,8,9], 1)); // -1

// for jasmine tests
exports.binarySearch = binarySearch;