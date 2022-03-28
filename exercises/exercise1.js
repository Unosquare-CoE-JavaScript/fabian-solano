var MAINAPP = MAINAPP || {};

(function (nsp) {
	"use strict";

	let wordnikWord = "http://api.wordnik.com/v4/word.json/",
		apiKey = "?api_key=2efe06dd56a60633b30010e4d970da03b55279db9896d7127",
		field = document.querySelector('#word'),
		btn = document.querySelector('#submitBtn'),
		results = document.querySelector('#results'),
		word,
		scrabbleVal = 0;

	const getValue = function (word) {
		fetch(`${wordnikWord}${word}/scrabbleScore${apiKey}`)
		.then(function (data) {
			return data.json();
		})
		.then(function (score) {
			scrabbleVal = score.value;
			results.innerHTML = scrabbleVal;
		});
	};

	btn.addEventListener('click', function (event) {
		word = field.value;
		getValue(word);
	});

	nsp.scrabbleVal = scrabbleVal;
})(MAINAPP);
