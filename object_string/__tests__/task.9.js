const rewire = require('rewire');

describe('`findAllMethods` function', () => {
	test("Should return an array of all methods of a passed object", () => {
		const indexFile = rewire('../index');
		const findAllMethods = indexFile.__get__('findAllMethods');
		expect(findAllMethods({})).toEqual([]);
		expect(findAllMethods(Array)).toEqual(['isArray', 'from', 'of']);
		expect(findAllMethods(String)).toEqual(['fromCharCode', 'fromCodePoint', 'raw']);
		expect(findAllMethods(Number)).toEqual(expect.arrayContaining(['isFinite', 'isInteger', 'isNaN', 'isSafeInteger']));
		expect(findAllMethods(Math)).toEqual(expect.arrayContaining([
			'abs',
			'acos',
			'cbrt',
			'ceil',
		]));
	});
})