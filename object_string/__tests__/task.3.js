const rewire = require('rewire');

describe('`ascii_to_hexa` function', () => { 
	test("Should convert passed value from ASCII to hexadecimal", () => {
		const indexFile = rewire('../index');
		const ascii_to_hexa = indexFile.__get__('ascii_to_hexa');
		expect(ascii_to_hexa("12")).toBe("3132");
		expect(ascii_to_hexa("100")).toBe("313030");
	});
 });