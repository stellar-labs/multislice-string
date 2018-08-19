const expect = require("chai").expect;
const multisliceString = require("../main.js");

const ERR_PARAM_1_NOT_STR =
	"multisliceString expects parameter 1 to be a string";
const ERR_PARAM_2_NOT_ARRAY =
	"multisliceString expects parameter 2 to be an array";
const ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS =
	"multisliceString expects parameter 2 to be an array of objects.";
const ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_START =
	"multisliceString expects parameter 2 to be an array of objects, each containing a key 'start', but one of the objects did not contain this key.";
const ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_END =
	"multisliceString expects parameter 2 to be an array of objects, each containing a key 'end', but one of the object did not contain this key.";
const ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_START_AS_A_NUMBER =
	"multisliceString expects parameter 2 to be an array of objects, each containing a key 'start' of type Number, but at least of of the object contain a key 'start' with a different type.";
const ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_END_AS_A_NUMBER =
	"multisliceString expects parameter 2 to be an array of objects, each containing a key 'end' of type Number, but at least of of the object contain a key 'end' with a different type.";

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam urna. Curabitur fermentum vestibulum elit, in porta ligula venenatis eget. Fusce venenatis porttitor velit. Pellentesque euismod aliquet dolor, id volutpat eros vehicula et. Quisque egestas augue eu pellentesque euismod. Phasellus imperdiet, erat ac consectetur rutrum, ante libero interdum diam, ut dignissim nisi erat vel velit. Nulla maximus sapien nec ante sollicitudin, ac euismod ligula convallis. Nunc ac leo vitae ligula mollis suscipit imperdiet non lacus. In sagittis placerat nunc at lacinia. Nam est sem, consectetur eu quam eget, viverra porta ligula. Nullam sollicitudin lacus in lorem faucibus, eu condimentum enim dignissim. Duis volutpat quam ac pharetra condimentum. Quisque iaculis finibus leo, et lacinia sapien. Curabitur at dapibus nisl. Vestibulum sodales non nulla vel vulputate. Curabitur aliquam, leo vitae sodales tempus, augue metus pellentesque velit, id condimentum elit massa vel dui.

Proin ipsum justo, mollis in mollis non, dignissim ac neque. In ac scelerisque ligula. Etiam dictum ante sit amet lectus gravida, et ultrices est semper. Aliquam tincidunt nibh eget fermentum egestas. Vestibulum posuere lectus in mauris scelerisque, quis sagittis neque luctus. Proin vestibulum tempor lacus ut vehicula. Morbi tincidunt turpis nec mi commodo pretium. Duis mattis dui ut dapibus aliquet. Maecenas tincidunt, risus eget semper finibus, orci odio condimentum justo, non aliquet lectus sapien a lacus. Phasellus condimentum viverra enim, nec blandit nisl. Aenean fringilla eros quis dui volutpat euismod. Donec orci risus, semper venenatis erat non, lacinia facilisis felis. Cras at sem aliquam, venenatis libero quis, ultricies nunc. In rutrum enim nec sollicitudin maximus. Nulla sed enim a turpis consequat dignissim vitae id dui. Fusce blandit malesuada dui vitae finibus.

Cras metus lorem, malesuada at bibendum sed, lacinia quis ipsum. Pellentesque sed fermentum sapien. Vivamus id orci diam. Sed diam libero, consectetur quis lorem id, elementum mattis enim. Phasellus nibh diam, ornare et iaculis id, efficitur eu neque. Suspendisse ultrices iaculis arcu sodales pulvinar. Phasellus quis pulvinar sapien. Fusce tincidunt mattis condimentum. Morbi ac tellus eu lorem dignissim pharetra vel ut eros. Vivamus volutpat nibh at lacus pretium, sed rhoncus arcu elementum. Phasellus porttitor velit nec lectus imperdiet sollicitudin.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin interdum vel felis id fringilla. Donec pretium urna et tortor hendrerit, nec placerat elit tempor. Nam lacus orci, maximus et ultrices sit amet, molestie rhoncus justo. Aenean dictum augue ut mauris dictum, id tincidunt odio vulputate. Ut ut dui mauris. Maecenas at velit tincidunt, viverra ante in, venenatis magna. Nam placerat in felis quis volutpat.

In nec nunc pulvinar, sagittis orci sit amet, mattis tellus. Integer eu fringilla felis, in hendrerit odio. Curabitur pulvinar a metus id vestibulum. Donec lacinia lorem turpis, eget finibus justo finibus et. Nam ut sollicitudin quam. Nam tincidunt eros in risus facilisis vulputate. Fusce mi eros, bibendum at nunc vel, ullamcorper suscipit nulla.`;

describe("multislice-string", function() {
	it("should exists", function() {
		expect(multisliceString).to.exist;
	});

	it("should throw an error if the first parameter is undefined instead of being a string", function() {
		expect(function() {
			multisliceString(undefined);
		}).to.throw(ERR_PARAM_1_NOT_STR);
	});

	it("should throw an error if the first argument is null instead of being a string", function() {
		expect(function() {
			multisliceString(null);
		}).to.throw(ERR_PARAM_1_NOT_STR);
	});

	it("should throw an error if the first argument is a number instead of a string", function() {
		expect(function() {
			multisliceString(1);
		}).to.throw(ERR_PARAM_1_NOT_STR);
	});

	it("should throw an error if the first argument is an array instead of a string", function() {
		expect(function() {
			multisliceString([]);
		}).to.throw(ERR_PARAM_1_NOT_STR);
	});

	it("should throw an error if the first argument is an object instead of a string", function() {
		expect(function() {
			multisliceString({});
		}).to.throw(ERR_PARAM_1_NOT_STR);
	});

	it("should throw an error if the first argument is a date instead of a string", function() {
		expect(function() {
			multisliceString(new Date());
		}).to.throw(ERR_PARAM_1_NOT_STR);
	});

	it("should throw an error if the first argument is a symbol instead of a string", function() {
		expect(function() {
			multisliceString(Symbol());
		}).to.throw(ERR_PARAM_1_NOT_STR);
	});

	it("should throw an error if the first argument is a regexp instead of a string", function() {
		expect(function() {
			multisliceString(new RegExp());
		}).to.throw(ERR_PARAM_1_NOT_STR);
	});

	it("should throw an error if the second parameter is undefined instead of an array", function() {
		expect(function() {
			multisliceString("", undefined);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY);
	});

	it("should throw an error if the second parameter is null instead of an array", function() {
		expect(function() {
			multisliceString("", null);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY);
	});

	it("should throw an error if the second parameter is an object instead of an array", function() {
		expect(function() {
			multisliceString("", {});
		}).to.throw(ERR_PARAM_2_NOT_ARRAY);
	});

	it("should throw an error if the second parameter is a number instead of an array", function() {
		expect(function() {
			multisliceString("", 1);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY);
	});

	it("should throw an error if the second parameter is a date instead of an array", function() {
		expect(function() {
			multisliceString("", new Date());
		}).to.throw(ERR_PARAM_2_NOT_ARRAY);
	});

	it("should throw an error if the second parameter is a symbol instead of an array", function() {
		expect(function() {
			multisliceString("", Symbol());
		}).to.throw(ERR_PARAM_2_NOT_ARRAY);
	});

	it("should throw an error if the second parameter is a regexp instead of an array", function() {
		expect(function() {
			multisliceString("", new RegExp());
		}).to.throw(ERR_PARAM_2_NOT_ARRAY);
	});

	it("should throw an error if one of the delimiters is undefined instead of an object", function() {
		expect(function() {
			multisliceString("", [undefined]);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS);
	});

	it("should throw an error if one of the delimiters is null instead of an object", function() {
		expect(function() {
			multisliceString("", [null]);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS);
	});

	it("should throw an error if one of the delimiters is a string instead of an object", function() {
		expect(function() {
			multisliceString("", [""]);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS);
	});

	it("should throw an error if one of the delimiters is a number instead of an object", function() {
		expect(function() {
			multisliceString("", [1]);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS);
	});

	it("should throw an error if one of the delimiters is an array instead of an object", function() {
		expect(function() {
			multisliceString("", [[]]);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS);
	});

	it("should throw an error if one of the delimiters is a date instead of an object", function() {
		expect(function() {
			multisliceString("", [new Date()]);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS);
	});

	it("should throw an error if one of the delimiters is a symbol instead of an object", function() {
		expect(function() {
			multisliceString("", [Symbol()]);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS);
	});

	it("should throw an error if one of the delimiters is a regexp instead of an object", function() {
		expect(function() {
			multisliceString("", [new RegExp()]);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS);
	});

	it("should throw an error if one of the delimiters does not contain the key start", function() {
		expect(function() {
			multisliceString("", [{}]);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_START);
	});

	it("should throw an error if one of the delimiters does not contain the key end", function() {
		expect(function() {
			multisliceString("", [{ start: 0 }]);
		}).to.throw(ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_END);
	});

	it("should throw an error if one of the delimiter does contain the key start of type undefined instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: undefined, end: 5 }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_START_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain the key start of type null instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: null, end: 5 }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_START_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain the key start of type string instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: "0", end: 5 }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_START_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain the key start of type date instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: new Date(), end: 5 }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_START_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain the key start of type symbol instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: Symbol(), end: 5 }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_START_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain the key start of type array instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: [0], end: 5 }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_START_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain the key start of type regexp instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: new RegExp(), end: 5 }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_START_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain a key end of type undefined instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: 0, end: undefined }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_END_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain a key end of type null instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: 0, end: null }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_END_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain a key end of type string instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: 0, end: "5" }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_END_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain a key end of type date instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: 0, end: new Date() }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_END_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain a key end of type symbol instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: 0, end: Symbol() }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_END_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain a key end of type array instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: 0, end: [5] }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_END_AS_A_NUMBER
		);
	});

	it("should throw an error if one of the delimiter does contain a key end of type regexp instead of number", function() {
		expect(function() {
			multisliceString("", [{ start: 0, end: new RegExp() }]);
		}).to.throw(
			ERR_PARAM_2_NOT_ARRAY_OF_OBJECTS_CONTAINING_END_AS_A_NUMBER
		);
	});

	it("should return the correct sentence when using one delimiter", function() {
		const INPUT = LOREM;

		const EXPECTED_OUTPUT =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam urna. Curabitur fermentum vestibulum elit, in porta ligula venenatis eget. Fusce venenatis porttitor velit. Pellentesque euismod aliquet dolor, id volutpat eros vehicula et. Quisque egestas augue eu pellentesque euismod. Phasellus imperdiet, erat ac consectetur rutrum, ante libero interdum diam, ut dignissim nisi erat vel velit. Nulla maximus sapien nec ante sollicitudin, ac euismod ligula convallis. Nunc ac leo vitae ligula mollis suscipit imperdiet non lacus. In sagittis placerat nunc at lacinia. Nam est sem, consectetur eu quam eget, viverra porta ligula. Nullam sollicitudin lacus in lorem faucibus, eu condimentum enim dignissim. Duis volutpat quam ac pharetra condimentum. Quisque iaculis finibus leo, et lacinia sapien. Curabitur at dapibus nisl. Vestibulum sodales non nulla vel vulputate. Curabitur aliquam, leo vitae sodales tempus, augue metus pellentesque velit, id condimentum elit massa vel dui.";

		expect(multisliceString(INPUT, [{ start: 0, end: 985 }])).to.be.equal(
			EXPECTED_OUTPUT
		);
	});

	it("should return the correct sentence when using multiple delimiters", function() {
		const INPUT = LOREM;
		const EXPECTED_OUTPUT =
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at diam urna. Curabitur fermentum vestibulum elit, in porta ligula venenatis eget. Fusce venenatis porttitor velit. Pellentesque euismod aliquet dolor, id volutpat eros vehicula et. Quisque egestas augue eu pellentesque euismod. Phasellus imperdiet, erat ac consectetur rutrum, ante libero interdum diam, ut dignissim nisi erat vel velit. Nulla maximus sapien nec ante sollicitudin, ac euismod ligula convallis. Nunc ac leo vitae ligula mollis suscipit imperdiet non lacus. In sagittis placerat nunc at lacinia. Nam est sem, consectetur eu quam eget, viverra porta ligula. Nullam sollicitudin lacus in lorem faucibus, eu condimentum enim dignissim. Duis volutpat quam ac pharetra condimentum. Quisque iaculis finibus leo, et lacinia sapien. Curabitur at dapibus nisl. Vestibulum sodales non nulla vel vulputate. Curabitur aliquam, leo vitae sodales tempus, augue metus pellentesque velit, id condimentum elit massa vel dui.Proin ipsum justo, mollis in mollis non, dignissim ac neque. In ac scelerisque ligula. Etiam dictum ante sit amet lectus gravida, et ultrices est semper. Aliquam tincidunt nibh eget fermentum egestas. Vestibulum posuere lectus in mauris scelerisque, quis sagittis neque luctus. Proin vestibulum tempor lacus ut vehicula. Morbi tincidunt turpis nec mi commodo pretium. Duis mattis dui ut dapibus aliquet. Maecenas tincidunt, risus eget semper finibus, orci odio condimentum justo, non aliquet lectus sapien a lacus. Phasellus condimentum viverra enim, nec blandit nisl. Aenean fringilla eros quis dui volutpat euismod. Donec orci risus, semper venenatis erat non, lacinia facilisis felis. Cras at sem aliquam, venenatis libero quis, ultricies nunc. In rutrum enim nec sollicitudin maximus. Nulla sed enim a turpis consequat dignissim vitae id dui. Fusce blandit malesuada dui vitae finibus.";

		expect(
			multisliceString(INPUT, [
				{ start: 0, end: 985 },
				{ start: 987, end: 1876 }
			])
		).to.be.equal(EXPECTED_OUTPUT);
	});
});
