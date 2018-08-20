const multisliceString = require("../index.js");

const OUTPUT = multisliceString("hello world", [{ start: 0, end: 5 }]);

console.log(OUTPUT);
