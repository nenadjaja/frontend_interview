// given 2 sorted arrays, compute their median
// median is obtained by merging 2 arrays and picking the median element
function findMedian1(arr1, arr2) {
  var result = arr1.concat(arr2).sort();
  var medianIndex = Math.floor((arr1.length+arr2.length-1)/2);
  return result[medianIndex];
}

function findMedian2(arr1, arr2) {
	var result = [];
	while (arr1.length && arr2.length) {
		if (arr1[0] < arr2[0]) {
			result.push(arr1[0]);
			arr1.shift(1);
		} else {
			result.push(arr2[0]);
			arr2.shift(1);
		}
	}
	result = (arr1.length) ? result.concat(arr1) : result.concat(arr2);
	return result[Math.floor((result.length-1)/2)-1];
}

//console.log(findMedian1([2,3,4],[1,3,6,7])); // [1,2,3,3,6,7] -> Math.floor(len1+len2)/2
//console.log(findMedian1([4,9],[1,7,8,10])); // [1,4,5,7,8], [1,4,7,9], [8,10]
console.log(findMedian2([2,3,4],[1,5,6,7]));
console.log(findMedian2([8,9],[12,4]));