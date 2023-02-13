# Calculator.js 
- A library which contains useful calculation functions based on common formulas (aspect ratio, percentage calculation, etc…)

- Work in the `index.js` file

#### Create a `Calculator` Class with

- Properties \
 PI = 3.141592653589793\
 E = 2.718281828459045

- Getters
```js
calculate.pi // Returns: 'PI (3.141592653589793)'

calculate.e // Returns: 'Euler's number (2.718281828459045)'
``` 
- Read more on: [Euler's Number](https://www.investopedia.com/terms/e/eulers-constant.asp#:~:text=Euler's%20number%20is%20an%20important,repeats%20(similar%20to%20pi).)

- Methods
```js
calculate.ratio(x,y,width)  //return: 'height is --- on ratio x:y'

calculate.percentage(x,y) // return the percentage of x in y.

calculate.add(x, y) // Returns the sum of x added to y.

calculate.subtract(x, y) // Returns the difference of x subtracted from y.

calculate.multiply(x, y) // Returns the product of x multiplied by y.

calculate.divide(x, y) // Returns the quotient of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

calculate.modulation(x, y) // Returns the remainder of x divided by y. WARNING: If the divisor is set to 0, an error will be thrown.

calculate.elevate(x, y) // Returns the power of x elevated to y.

calculate.sqrt(x) // Returns the square root of x.
```