const rewire = require('rewire');

describe('`alphabetize_string` function', () => {
	test("Should return the passed string in alphabetical order", () => {
		const indexFile = rewire('../index');
		const alphabetize_string = indexFile.__get__('alphabetize_string');
		expect(alphabetize_string("cat")).toMatch(/act/i);
		expect(alphabetize_string("United States")).toMatch(/adeeinsstttu/i);
	});
});

