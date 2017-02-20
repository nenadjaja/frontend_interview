var palindrome = require("../challenges/palindrome");

describe("palindrome#palindrome", function() {
	it ("should return true", function() {
		expect(palindrome.palindrome("eye")).toBe(true);
	});

	it ("should return false", function() {
		expect(palindrome.palindrome("blah")).toBe(false);
	});

	it ("should return true", function() {
		expect(palindrome.palindrome("")).toBe(true);
	});

	it ("should return true", function() {
		expect(palindrome.palindrome("A man, a plan, a canal. Panama")).toBe(true);
	});

	it ("should return true", function() {
		expect(palindrome.palindrome("0_0 (: /-\ :) 0-0")).toBe(true);
	});

});
