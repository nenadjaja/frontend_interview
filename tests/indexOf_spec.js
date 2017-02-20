var indexOf = require("../challenges/indexOf");

describe("indexOf#stringSearch", function() {
	it("should return 0", function() {
		expect(indexOf.stringSearch('hello world', 'hello')).toBe(0);
	});

	it("should return 6", function() {
		expect(indexOf.stringSearch('hello world', 'world')).toBe(6);
	});

	it("should return -1", function() {
		expect(indexOf.stringSearch('hello world', 'aaaa')).toBe(-1);
	});

	it("should return 7", function() {
		expect(indexOf.stringSearch('eeeeeeeeeefffff', 'eeef')).toBe(7);
	});
});
