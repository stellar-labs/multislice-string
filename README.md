# multislice-string

Slice a string according to several slice operations instead of a single one.

![NpmVersion](https://img.shields.io/npm/v/multislice-string.svg)
![Codeship](https://img.shields.io/codeship/e0bd2ee0-86e5-0136-cf91-4e9297bf3221/master.svg)
![NpmLicense](https://img.shields.io/npm/l/multislice-string.svg)

## Summary

- [Installation](#installation)
- [Example of use](#example-of-use)
- [API](#api)

## Installation

On your terminal:

```bash
npm install --save multislice-string@0.*
```

```bash
yarn add multislice-string@0.*
```

## Example of use

- [Example 1: simple slice](#example-1-simple-slice)
- [Example 2: slicing multiple part of a string](#example-2-slicing-multiple-part-of-a-string)
- [Example 3: catching errors](example-3-catching-errors)
- [Example 4: slicing the full string](#example-4-slicing-the-full-string)

### Example 1: simple slice

```javascript
const multisliceString = require("multislice-string");
const OUTPUT = multisliceString("hello world", [{ start: 0, end: 5 }]);

console.log(OUTPUT);
```

```
"hello"
```

### Example 2: slicing multiple part of a string

```javascript
const multisliceString = require("multislice-string");
const TEXT = `Put your heart, mind, and soul into even your smallest acts. This is the secret of success.`;
const OUTPUT = multisliceString(TEXT, [
  { start: 9, end: 16 },
  { start: 16, end: 22 },
  { start: 26, end: 30 }
]);

console.log(OUTPUT);
```

```
"heart, mind, soul"
```

### Example 3: catching errors

```javascript
const multisliceString = require("multislice-string");

try {
  multisliceString();
} catch (exception) {
  switch (exception.name) {
    case "InvalidArgumentException":
        console.log(exception);

      break;
    case "Exception":
      console.log(exception);

      break;
  }
}
```

```
InvalidArgumentException: multisliceString expects parameter 1 to be a string
    at multisliceString (C:\\stellar-labs\multislice-string\index.js:32:15)
    at Object.<anonymous> (C:\\stellar-labs\multislice-string\example\example-3.js:4:2)
    at Module._compile (module.js:652:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Function.Module.runMain (module.js:693:10)
    at startup (bootstrap_node.js:188:16)
    at bootstrap_node.js:609:3
```

### Example 4: slicing the full string

```javascript
const multisliceString = require("multislice-string");

const text = "Did you know? NaN === NaN is equal to false.";
const output = multisliceString(text, [{ start: 0, end: text.length }]);

console.log(output);
```

```
"Did you know? NaN === NaN is equal to false."
```

## API

- [multisliceString()](#multislicestring)

### multisliceString()

**prototype**

```javascript
const multisliceString = function(content: string, delimiters: Array<object>): string
```

**exceptions**

`InvalidArgumentException`

- If the first parameter is not a string
- If the second parameter is not an array of objects, with each objects containing 2 keys, `start` and `end`, both integers