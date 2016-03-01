function createPromise() {
  //create a Promise
  var promise = new Promise(function(resolve, reject) {
    setTimeout(function resolvePromise() {
      resolve();
    }, 1000);
  });

  //return the promise
  return promise;

}

doIt = createPromise();

doIt.then(function() {
  console.log('1');
  doIt2 = createPromise();

  return doIt2;
}).then(function() {
  console.log('2');
  doIt3 = createPromise();

  return doIt3;
}).then(function() {
  console.log('3');
  doIt4 = createPromise();

  return doIt4;
}).then(function() {
  console.log('4');
});

console.log('5');
