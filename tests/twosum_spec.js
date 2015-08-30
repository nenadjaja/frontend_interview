var twosum = require('../examples/twosum');

describe("twosum#twosum", function() {
	it ("should [3,5]", function() {
		var result = twosum.twosum([1,3,5,2,6,8,9], 10);
		expect(result).toEqual([3,5]);
	});
});