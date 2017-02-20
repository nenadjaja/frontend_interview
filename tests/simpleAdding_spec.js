var simpleAdding = require("../challenges/coderbyte/simpleAdding");

describe("simpleAdding#simpleAdding", function() {
	it ("should return 15", function() {
		var sum = simpleAdding.simpleAdding(5);
		expect(sum).toEqual(15);
	});

	it ("should return 0", function() {
		var sum = simpleAdding.simpleAdding(0);
		expect(sum).toEqual(0);
	});

	it ("should return 0", function() {
		var sum = simpleAdding.simpleAdding(-3);
		expect(sum).toEqual("Only positive numbers!");
	});

});