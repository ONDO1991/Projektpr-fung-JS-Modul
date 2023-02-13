# Projekt

- Arbeit in `index.js`
### String

1. Schreibe eine Funktion namens `truncate`, um eine Zeichenkette auf eine bestimmte Anzahl von Wörtern abzuschneiden.

```js
console.log(truncate("The quick brown fox jumps over the lazy dog", 4)); // "The quick brown fox"
```

2. Schreibe eine Funktion namens `alphabetize_string`, um eine gegebene Zeichenkette zu alphabetisieren.

- Hinweis: Alphabetize string : Eine einzelne Zeichenkette kann alphabetisiert werden. Dabei werden die Buchstaben neu angeordnet, so dass sie von A bis Z sortiert sind.

```js
console.log(alphabetize_string("United States"));
//"adeeinsstttu"
```

3. Schreibe eine Funktion namens `ascii_to_hexa`, um das ASCII-Format in das Hexadezimalformat umzuwandeln.

```js
console.log(ascii_to_hexa("12")); //3132
console.log(ascii_to_hexa("100")); //313030
```

4. Schreibe eine Funktion mit dem Namen `humanize`, um vermenschlichte Zahlen mit dem richtigen Suffix wie 1, 2, 3 oder 4 zu erhalten.

```js
console.log(humanize(1)); //"1st"
console.log(humanize(20)); //"20th"
console.log(humanize(302)); //"302nd"
```

5. Schreibe eine JavaScript-Funktion, um den Nachfolger eines Strings zu ermitteln.

`Hinweis`: Der Nachfolger wird durch Inkrementierung der Zeichen berechnet, beginnend mit dem ganz rechten alphanumerischen Zeichen (oder dem ganz rechten Zeichen, wenn es keine alphanumerischen Zeichen gibt) in der Zeichenkette. Die Inkrementierung einer Ziffer führt immer zu einer weiteren Ziffer und die Inkrementierung eines Buchstabens zu einem weiteren Buchstaben derselben Groß-/Kleinschreibung. Wenn die Inkrementierung einen Übertrag erzeugt, wird das Zeichen links davon inkrementiert. Dieser Vorgang wird so lange wiederholt, bis es keinen Übertrag mehr gibt, und bei Bedarf wird ein weiteres Zeichen hinzugefügt.

```js
successor("abcd"); // "abce"
successor("THX1138"); // "THX1139"
successor("< >"); // "< >"
successor("1999zzz"); // "2000aaa"
successor("ZZZ9999"); // "AAAA0000"
```

### Objekt

6. Schreibe eine Funktion namens `compare_to_sort`, um das folgende Array von Objekten nach dem Titelwert zu sortieren.

```js
var library = [
  { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
  { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    libraryID: 3245,
  },
];
//sorted
/*/* {
  author: "Suzanne Collins",
  libraryID: 3245,
  title:"Mockingjay:The Final Book of The Hunger Games"
}, [object Object] {
  author: "Bill Gates",
  libraryID: 1254,
  title: "The Road Ahead"
}, [object Object] {
  author: "Steve Jobs",
  libraryID: 4264,
  title: "Walter Isaacson"
}]*/
```


7. Schreibe eine Funktion namens `num_string_range`, um ein Array mit Werten (numerisch, String mit einem Zeichen) innerhalb der angegebenen Grenzen zu füllen.

```js
console.log(num_string_range("a", "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]
```

8. Schreibe einen Namen `my_Clock`, um eine Uhr zu erstellen.
- Die Instanz von `my_Clock` sollte die Eigenschaften `Stunden`, `Minuten` und `Sekunden` haben
- Anmerkung": Die Ausgabe wird jede Sekunde erfolgen.

```js
"14:37:42";
"14:37:43";
"14:37:44";
"14:37:45";
"14:37:46";
"14:37:47";

```

9. Schreibe eine Funktion namens `all_properties`, um alle Methoden in einem JavaScript-Objekt auszugeben.

```js
console.log(all_properties(Array));
["isArray", "from", "of"]
console.log(all_properties(Math));
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc"]

```

10. Schreibe eine Funktion namens "all_properties", die alle Eigenschaften eines Objekts ausgibt.

```js
console.log(all_properties(Math));
["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"]
console.log(all_properties(Array));
["length", "name", "prototype", "isArray", "from", "of"]
```
