// function Person(name, age, male) {
// 	this.name = name;
// 	this.age = age;
// 	this.male = male;
// 	this.say = function () {
// 		const str = `我的名字叫${this.name}，我今年${this.age}岁了，我是一个${this.male?'男孩':'女孩'}`;
// 		console.log(str);
// 		return str;
// 	}
// }

// Person.prototype.play = function(player) {
// 	const str = `我喜欢玩${player}`;
// 	console.log(str);
// 	return str;
// }

function playDecorator(target) {
	target.prototype.play = function(player) {
		const str = `我喜欢玩${player}`;
 		console.log(str);
 		return str;
	}
	return target;
}

@playDecorator
class Person{
	constructor(name, age, male) {
		this.name = name;
		this.age = age;
		this.male = male;
	}

	say() {
 		const str = `我的名字叫${this.name}，我今年${this.age}岁了，我是一个${this.male?'男孩':'女孩'}`;
 		console.log(str);
 		return str;
	}
}

const p = new Person('张三', 18, true);
p.say();
p.play('乒乓球');