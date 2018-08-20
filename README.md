# multisliceString

Slice a string according to several slice operations instead of a single one.

![NpmVersion](https://img.shields.io/npm/v/multislice-string.svg)
![NpmLicense](https://img.shields.io/npm/l/multislice-string.svg)

## Summary

-   [Installation](#installation)
-   [Example of use](#example-of-use)

## Installation

On your terminal:

```bash
npm install --save multislice-string@0.*
```

```bash
yarn add multislice-string@0.*
```

## Example of use

-   [Example 1: simple slice](#example-1-simple-slice)

### Example 1: simple slice

```javascript
const multisliceString = require("multislice-string");

const OUTPUT = multisliceString("hello world", [{ start: 0, end: 5 }]);

console.log(OUTPUT);
```

```
"hello"
```
