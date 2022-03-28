var MAINAPP = (function (nsp) {
	"use strict";

	let url = 'https://jsonplaceholder.typicode.com/';


	(async function () {
		try {
			let p1 = fetch(url + 'posts/'),
				p2 = fetch(url + 'comments/'),
				p3 = fetch(url + 'todos/');

			const results = await Promise.all([p1, p2, p3]);

			nsp.posts = await results[0].json();
			nsp.comments = await results[1].json();
			nsp.todos = await results[2].json();
			console.log("data received.");
		} catch (err) {
			console.error(`Problem retrieving data: ${err}`)
		}
	})();

	console.log("Remaining Code.")

	//public
	return nsp;
})(MAINAPP || {});
