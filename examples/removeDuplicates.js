// write a function that accepts an array and
// removes returns an array without the duplicates
function removeDuplicates(arr) {
	var len = arr.length;
	if (len === 1) return arr;
	var newArr = [];
	var hash = {};
	for (var ind=0; ind<len; ind++) {
		var elem = arr[ind];
		if (!hash[elem]) {
			// use true instead of hash[elem] = ind; because
			// ind might be 0 and that would invalidate the condition
			hash[elem] = true;
			newArr.push(elem);
		}
	}
	return newArr;
}

console.log(removeDuplicates([1,2,3,2,4,3]));
console.log(removeDuplicates([4,5,4,3,5,5]));

exports.removeDuplicates = removeDuplicates;
