# Calculator.js
- Eine Bibliothek, die nützliche Berechnungsfunktionen enthält, die auf gängigen Formeln basieren (Seitenverhältnis, Prozentberechnung, etc...)

- Arbeitet in der Datei `index.js`.

#### Erstelle eine `Calculator` Klasse mit

- Eigenschaften \
 PI = 3.141592653589793\
 E = 2.718281828459045

- Getter
```js
calculate.pi // gibt zurück: 'PI (3.141592653589793)'

calculate.e // gibt zurück: 'Euler's number (2.718281828459045)'
``` 
- Lies mehr darüber: [Eulersche Zahl](https://www.investopedia.com/terms/e/eulers-constant.asp#:~:text=Eulersche%20Zahl%20ist%20ein%20wichtiges,wiederholtes%20(ähnliches%20mit%20pi).)

- Methoden
```js
calculate.ratio(x,y,width) //gibt zurück: 'height is --- on ratio x:y'

calculate.percentage(x,y) // gibt den prozentualen Anteil von x in y zurück.

calculate.add(x, y) // Gibt die Summe von x addiert zu y zurück.

calculate.subtract(x, y) // Gibt die Differenz von x subtrahiert von y zurück.

calculate.multiply(x, y) // Gibt das Produkt von x multipliziert mit y zurück.

calculate.divide(x, y) // Gibt den Quotienten von x geteilt durch y zurück. WARNUNG: Wenn der Divisor auf 0 gesetzt wird, wird ein Fehler ausgegeben.

calculate.modulation(x, y) // Gibt den Rest von x geteilt durch y zurück. WARNUNG: Wenn der Divisor auf 0 gesetzt wird, wird ein Fehler ausgegeben.

calculate.elevate(x, y) // Gibt die Potenz von x erhöht auf y zurück.

calculate.sqrt(x) // Gibt die Quadratwurzel von x zurück.
```
