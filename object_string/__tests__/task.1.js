const rewire = require('rewire');

describe('`truncate` Function', () => {
	test("Should return the given string truncated by the number limit passed", () => {
		const indexFile = rewire('../index');
		const truncate = indexFile.__get__('truncate');
		expect(truncate("The quick brown fox jumps over the lazy dog", 4)).toMatch(/^The quick brown fox$/i);
		expect(truncate("This is an attempt for making fun of strings", 4)).toMatch(/^This is an attempt$/i);
	});
})
