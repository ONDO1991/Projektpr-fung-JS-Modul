const rewire = require('rewire');

describe('`num_string_range` function', () => {
	test("Should fill an array with values (numeric, string with one character) on passed bounds", () => {
		const indexFile = rewire('../index');
		const num_string_range = indexFile.__get__('num_string_range');
		expect(num_string_range("a", "z", 2)).toEqual(['a', 'c', 'e', 'g',
			'i', 'k', 'm', 'o',
			'q', 's', 'u', 'w',
			'y']);
		expect(num_string_range("Z", "A", 2)).toEqual(['Z', 'X', 'V', 'T',
			'R', 'P', 'N', 'L',
			'J', 'H', 'F', 'D',
			'B']);
		expect(num_string_range(0, -5, 1)).toEqual([0, -1, -2, -3, -4, -5]);
	});
});