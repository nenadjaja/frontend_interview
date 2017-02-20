var twosum = require('../challenges/twosum');

describe("twosum#twosum", function() {
	it ("should return [3,5]", function() {
		var result = twosum.twosum([1,3,5,2,6,8,9], 10);
		expect(result).toEqual([3,5]);
	});

	it ("should return [0,2]", function() {
		var result = twosum.twosum([1,3,2], 3);
		expect(result).toEqual([0,2]);
	});
});