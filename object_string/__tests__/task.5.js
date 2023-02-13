const rewire = require('rewire');

describe('`successor` function', () => { 
	test("Should return the 'successor' of the passed value", () => {
		const indexFile = rewire('../index');
		const successor = indexFile.__get__('successor');
		expect(successor("a")).toBe("b");
		expect(successor("1234")).toBe("1235");
		expect(successor("1999zzz")).toBe("2000aaa");
	});
 });