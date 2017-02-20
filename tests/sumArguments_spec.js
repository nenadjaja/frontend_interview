var sumArguments = require("../challenges/sumArguments");

describe("sumArguments#sumArguments", function() {
	it ("should return 12", function() {
		var testResult = sumArguments.sumArguments(5,4,3);
		expect(testResult).toBe(12);
	});

	it ("should return 0", function() {
		var testResult = sumArguments.sumArguments();
		expect(testResult).toEqual(0);
	});

	it ("should return 0", function() {
		var testResult = sumArguments.sumArguments(-2,2);
		expect(testResult).toEqual(0);
	});

});