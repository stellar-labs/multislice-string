const multisliceString = require("../index.js");
const TEXT = `Put your heart, mind, and soul into even your smallest acts. This is the secret of success.`;
const OUTPUT = multisliceString(TEXT, [
	{ start: 9, end: 16 },
	{ start: 16, end: 22 },
	{ start: 26, end: 30 }
]);

console.log(OUTPUT);
