const multisliceString = require("../index");

const text = "Did you know? NaN === NaN is equal to false.";
const output = multisliceString(text, [{ start: 0, end: text.length }]);

console.log(output);
