// function* generator(x, y) {
//   yield x + 1;
//   let z = yield y + 1;
//   return z;
// }

// const iterator = generator(2, 3);
// const res1 =  iterator.next(1, 5);
// const res2 =  iterator.next(1, 5);
// const res3 =  iterator.next(3, 5);
// console.log(res1, res2, res3);

// const iterator = generator(2);
// const res1 =  iterator.next();




// function* generator(x) {
//   let y = yield x + 1;
//   return y;
// }

// const gen = generator(3);
// const  res1 = gen.next();
// const  res2 = gen.next(5);

// console.log(res1, res2);

/**
 * 定义一个异步生成器函数
 *    作用是通过接口请求数据，将数据打印在控制台
 * 1. 执行生成器函数，获得生成器gen
 * 2. 调用一次生成器的next方法，开始请求接口数据
 *        将接口返回的数据，进行格式化
 * 3. 再调用一次生成器的next方法，将格式后的值返回给生成器
 *        生成器中的打印功能执行，控制台可以看到获取的结果
 * 
 * 意义：采用同步的写法，提高代码可读性
 */
function* asyncGenerator() {
  const result = yield fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(result); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
}

const gen = asyncGenerator();

gen.next().value
  .then(response => response.json())
  .then(data => gen.next(data)); // 执行异步操作，并将结果作为参数传回 Generator 函数
