// The MIT License

// Copyright (c) 2018, Stellar Labs

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import { InvalidArgumentException } from "node-exceptions";

/**
 * Return the sliced string from multiple slice parameters.
 * @example const sliced = multilineString('hello world', [{start: 0, end: 5}, {start: 6, end: 11}]);
 * @param {String} content The content to slice.
 * @param {Array<Object>} delimiters The slices to operate on the string.
 * @return {String}
 * @throws {Error} If the content is not a string.
 * @throws {Error} If the delimiters is not an array of object containing both "start" and "end" keys being Numbers.
 */
const multisliceString = function(
	content: string,
	delimiters: Array<object>
): string {
	if (
		content === undefined ||
		content === null ||
		content.constructor !== String
	) {
		throw new InvalidArgumentException(
			"multisliceString expects parameter 1 to be a string"
		);
	}

	if (
		delimiters === undefined ||
		delimiters === null ||
		delimiters.constructor !== Array
	) {
		throw new InvalidArgumentException(
			"multisliceString expects parameter 2 to be an array"
		);
	}

	let sliced_string = "";

	for (let delimiter of delimiters) {
		if (
			delimiter === undefined ||
			delimiter === null ||
			delimiter.constructor !== Object
		) {
			throw new InvalidArgumentException(
				"multisliceString expects parameter 2 to be an array of objects."
			);
		}

		if ("start" in delimiter === false) {
			throw new InvalidArgumentException(
				"multisliceString expects parameter 2 to be an array of objects, each containing a key 'start', but one of the objects did not contain this key."
			);
		}

		if ("end" in delimiter === false) {
			throw new InvalidArgumentException(
				"multisliceString expects parameter 2 to be an array of objects, each containing a key 'end', but one of the object did not contain this key."
			);
		}

		if (
			delimiter["start"] === undefined ||
			delimiter["start"] === null ||
			delimiter["start"].constructor !== Number
		) {
			throw new InvalidArgumentException(
				"multisliceString expects parameter 2 to be an array of objects, each containing a key 'start' of type Number, but at least of of the object contain a key 'start' with a different type."
			);
		}

		if (
			delimiter["end"] === undefined ||
			delimiter["end"] === null ||
			delimiter["end"].constructor !== Number
		) {
			throw new InvalidArgumentException(
				"multisliceString expects parameter 2 to be an array of objects, each containing a key 'end' of type Number, but at least of of the object contain a key 'end' with a different type."
			);
		}

		const START = delimiter["start"];
		const END = delimiter["end"];

		sliced_string += content.slice(START, END);
	}

	return sliced_string;
};

export = multisliceString;
