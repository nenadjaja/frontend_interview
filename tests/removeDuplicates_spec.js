var removeDuplicates = require("../challenges/removeDuplicates");

describe("removeDuplicates#removeDuplicates", function() {
	it("should return [1,2,3,4]", function() {
		var result = removeDuplicates.removeDuplicates([1,2,3,2,4,3]);
		expect(result).toEqual([1,2,3,4]);
	});

	it("should return [10]", function() {
		var result = removeDuplicates.removeDuplicates([10]);
		expect(result).toEqual([10]);
	});

	it("should return [4,5,3]", function() {
		var result = removeDuplicates.removeDuplicates([4,5,4,3,5,5]);
		expect(result).toEqual([4,5,3]);
	});
});
