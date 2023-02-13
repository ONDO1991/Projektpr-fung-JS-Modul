const rewire = require("rewire");

beforeAll(() => (consoleSpy = jest.spyOn(console, "log")));

describe('Calculator Class', () => {
  it("`Calculator` Class should be defined", () => {
    const solution = rewire("../index.js");
    const Calculator = solution.__get__("Calculator");
    expect(Calculator).toBeDefined();
  });
});

describe("PI property", () => {
  test("The property `PI` must be defined with the value `3.141592653589793`", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.PI).toEqual(3.141592653589793);
  });
});

describe('E Propertx', () => {
  test("The property `E` must be defined with the value `2.718281828459045`", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.E).toEqual(2.718281828459045);
  });
});

describe('Getter `pi`', () => {
  test("`pi` must be defined as a getter that returns the string `PI (3.141592653589793)`", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.pi).toMatch("PI (3.141592653589793)");
  });
});

describe('Getter `e`', () => {
  test("`e` must be defined as a getter that returns the string `Euler's number (2.718281828459045)′", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.e).toEqual(expect.stringContaining("2.718281828459045"));
  });
});

describe('`ratio` method', () => {
  test("`ratio` method must be defined, it takes 3 parameters (x,y and width) and returns this string with the calculated height filling the space: 'height is --- on ratio x:y' ", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.ratio(5, 7, 300)).toEqual('height is 420 on ratio 5:7');
  });
})

describe('`percentage` method', () => {
  test("`percentage` method must be defined, it takes 2 parameters (x and y) and returns the percentage of x in y written as a string with the sign %", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.percentage(3, 12)).toEqual('25%');
  });
});

describe('`add` method', () => {
  test("the method 'add' must be defined, it takes 2 parameters (x and y) and returns the sum of them as a number", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.add(5, 7)).toEqual(12);
  });
});

describe('`subtract` method', () => {
  test("`subtract` method must be defined, it takes 2 parameters (x and y) and returns the difference between them as a number (expected: y - x)", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.subtract(5, 7)).toEqual(2);
  });
});


describe('`multiply` method', () => {
  test("`multiply` method must be defined, it takes 2 parameters (x and y) and returns the multiplication of them as a number", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.multiply(5, 7)).toEqual(35);
  });
});

describe('`divide` method', () => {
  test("`divide` method must be defined, it takes 2 parameters (x and y) and returns the division of them as a number", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.divide(35, 7)).toEqual(5);
  });
});

describe('`modulation` method', () => {
  test("`modulation` method must be defined, it takes 2 parameters (x and y) and returns the remainder of x divided by y as a number", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.modulation(7, 5)).toEqual(2);
  });
});

describe('`elevate` method', () => {
  test("`elevate` method must be defined, it takes 2 parameters (x and y) and returns the power of x elevated to y as a number", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.elevate(5, 3)).toEqual(125);
  });
});

describe('`sqrt` method', () => {
  test("`sqrt` method must be defined, it takes 1 parameter (x) and returns the square root of x", () => {
    const solution = rewire("../index");
    const Calculator = solution.__get__("Calculator");
    const calculator = new Calculator()
    expect(calculator.sqrt(25)).toEqual(5);
  });
});
