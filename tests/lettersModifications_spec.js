var letter_capitalize = require("../examples/coderbyte/letterCapitalize");
var letter_changes = require("../examples/coderbyte/letterChanges");

describe('letter_capitalize#letterCapitalize', function() {
	it('should return Have A Good Day', function() {
		var result = letter_capitalize.letterCapitalize('have a good day');
		expect(result).toBe('Have A Good Day');
	});

	it('should return -1', function() {
		var result = letter_capitalize.letterCapitalize('');
		expect(result).toBe(-1);
	});

	it('should return Bye', function() {
		var result = letter_capitalize.letterCapitalize('bye');
		expect(result).toBe('Bye');
	});

});

describe('letter_changes#letterChanges', function() {
	it('should return BCD', function() {
		expect(letter_changes.letterChanges('ABC')).toBe('BCD');
	});

	it('should return Z', function() {
		expect(letter_changes.letterChanges('Y')).toBe('Z');
	});

	it('should return -1', function() {
		expect(letter_changes.letterChanges('')).toBe(-1);
	});

	it('should return A', function() {
		expect(letter_changes.letterChanges('z')).toBe('A');
	});

	it('should return a', function() {
		expect(letter_changes.letterChanges('Z')).toBe('a');
	});

});

