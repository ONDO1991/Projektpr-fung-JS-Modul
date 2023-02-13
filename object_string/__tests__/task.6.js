const rewire = require('rewire');

describe('`compare_to_sort` function', () => {
	test("`library` array should be defined", () => {
		const indexFile = rewire('../index');
		const library = indexFile.__get__('library');
		expect(library).toBeDefined();
		expect(library.length).toBeTruthy();
	})
	test("function should sort elements in an array by `title` and return them", () => {
		const indexFile = rewire('../index');
		const compare_to_sort = indexFile.__get__('compare_to_sort');
		const library = indexFile.__get__('library');
		expect(library.sort(compare_to_sort)).toEqual(expect.arrayContaining([
			{
				author: expect.any(String), title: expect.any(String), libraryID: expect.any(Number)
			}
		]));
	});
})
