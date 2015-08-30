function twosum(arr, sum) {
	found = {};
	for (var ind=0; ind<arr.length; ind++) {
		var elem = arr[ind];
		if (found[sum-elem]) {
			return [found[sum-elem]-1, ind];
		} else {
			found[elem] = ind+1;
		}
	}
}

arr = [1,3,5,2,6,8,9];
console.log(twosum(arr, 10));
console.log(twosum([1,3,2],3));

exports.twosum = twosum;
