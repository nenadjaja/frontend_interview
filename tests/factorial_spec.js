var factorial = require("../examples/coderbyte/firstFactorial");

describe("factorial#factorial", function() {
	it ("shold return 120", function() {
		expect(factorial.factorial(5)).toBe(120);
	});

	it ("shold return 1", function() {
		expect(factorial.factorial(0)).toBe(1);
	});

	it ("shold return -1", function() {
		expect(factorial.factorial(-5)).toBe(-1);
	});

});

describe("factorial#factorial2", function() {
	it ("shold return 40320", function() {
		expect(factorial.factorial(8)).toBe(40320);
	});

	it ("shold return 1", function() {
		expect(factorial.factorial(0)).toBe(1);
	});

	it ("shold return -1", function() {
		expect(factorial.factorial(-8)).toBe(-1);
	});
});