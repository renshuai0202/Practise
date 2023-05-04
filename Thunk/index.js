// function calculateSomething(m) {
// 	const result = m * 2;
// 	console.log(result);
// }

// const x = 2;
// calculateSomething(x + 5); // 14

function thunk() {
	return x + 5;
}

function calculateSomething(thunk) {
	const result = thunk() * 2;
	console.log(result);
}

let x = 2;
calculateSomething(thunk);