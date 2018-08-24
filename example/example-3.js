const multisliceString = require("../index.js");

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
