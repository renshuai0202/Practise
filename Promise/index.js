const str = 'Hello';
const p1 = Promise.resolve(str);
p1.then(res => {
  console.log(res);
})

const obj = {
  name: 'zhangsan',
  age: 18
};
const p2 = Promise.resolve(obj);
p2.then(res => {
  console.log(res);
})


function func() {
  console.log('function run');
  return 'ABC';
}
const p3 = Promise.resolve(func());
p3.then(res => {
  console.log(res);
})

const p4 = Promise.resolve(function() {return 'XYZ';});
p4.then(res => {
  console.log(res());
})