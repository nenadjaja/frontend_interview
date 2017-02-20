var reverseString = require("../challenges/reverseString");

describe("reverseString#reverse1", function() {
	it ("should return TNAHPELE", function() {
		expect(reverseString.reverse1("ELEPHANT")).toBe("TNAHPELE");
	});

	it ("should return L", function() {
		expect(reverseString.reverse1("L")).toBe("L");
	});
});

describe("reverseString#reverse2", function() {
	it ("should return yppaH", function() {
		expect(reverseString.reverse2("Happy")).toBe("yppaH");
	});
});

describe("reverseString#reverse3", function() {
	it ("should return rehtaew", function() {
		expect(reverseString.reverse2("weather")).toBe("rehtaew");
	});
});