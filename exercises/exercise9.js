const randomNum = function* (end) {
	while (true) {
		let rand = Math.floor(Math.random() * end) + 1;
		yield rand;
	};
};

let rand100 = randomNum(100);

let rand10 = randomNum(10);