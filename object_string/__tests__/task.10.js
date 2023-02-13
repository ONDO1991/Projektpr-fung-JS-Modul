const rewire = require('rewire');

describe('`all_properties` function', () => {
	test("Should return an array of all properties of the passed object", () => {
		const indexFile = rewire('../index');
		const all_properties = indexFile.__get__('all_properties');
		expect(all_properties(Math)).toEqual(expect.arrayContaining([
			'log1p', 'log2', 'log10', 'max',
			'min', 'pow', 'random', 'round'
		]));
		expect(all_properties(Array)).toEqual(expect.arrayContaining([
			'length', 'name', 'prototype', 'isArray'
		]));
	});
})
