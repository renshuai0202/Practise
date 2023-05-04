const getFoo = function () {
  return new Promise(function(resolve, reject) {
    resolve('foo');
  })
}

const g = function* () {
  try {
    const foo = yield getFoo();
    console.log(foo);
  } catch(e) {
    console.log(e);
  }
}

function run (generator) {
  const iterator = generator();
  function go(result) {
    if(result.done) return result.value;
    return result.value.then(function(value) {
      return go(iterator.next(value));
    }, function(err) {
      go(iterator.throw(err));
    })
  }

  go(iterator.next());
}

run(g);