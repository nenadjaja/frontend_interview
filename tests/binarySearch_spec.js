var binarySearch = require('../examples/binarySearch');

describe("binarySearch#binarySearch", function() {
	it ("should return 1", function() {
		expect(binarySearch.binarySearch([1,3,5,7,9,11,13],3)).toBe(1);
	});

	it ("should return -1", function() {
		expect(binarySearch.binarySearch([], 2)).toBe(-1);
	});

	it ("should return 0", function() {
		expect(binarySearch.binarySearch([10],10)).toBe(0);
	});

	it ("should return -1", function() {
		expect(binarySearch.binarySearch([7,8,9],1)).toBe(-1);
	});


});