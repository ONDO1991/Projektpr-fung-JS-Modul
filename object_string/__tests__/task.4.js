const rewire = require('rewire');

describe('`humanize` function', () => { 
	test("Should return 'humanized' number with the correct suffix", () => {
		const indexFile = rewire('../index');
		const humanize = indexFile.__get__('humanize');
		expect(humanize(1)).toMatch(/1st/);
		expect(humanize(20)).toMatch(/20th/);
		expect(humanize(302)).toMatch(/302nd/);
	});
 });