function twosum(arr, sum) {
	found = {};
	for (var ind=0; ind<arr.length; ind++) {
		var elem = arr[ind];
		if (found[sum-elem]) {
			return [found[sum-elem], ind];
		} else {
			found[elem] = ind;
		}
	}
}

arr = [1,3,5,2,6,8,9];
console.log(twosum(arr, 10));

exports.twosum = twosum;
