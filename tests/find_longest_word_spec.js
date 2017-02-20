var longestWord = require("../challenges/longestWord");

describe("longestWord#findLongestWord", function() {
	it("should return 7", function() {
		expect(longestWord.findLongestWord("I am the longest word")).toBe(7);
	});

	it("should return 0", function() {
		expect(longestWord.findLongestWord("")).toBe(0);
	});

	it("should return 1", function() {
		expect(longestWord.findLongestWord("I")).toBe(1);
	});

});
