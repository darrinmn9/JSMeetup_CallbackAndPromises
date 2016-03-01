function createPromise() {
  //create a Promise
  var promise = new Promise(function(resolve, reject) {
    setTimeout(function resolvePromise() {
      resolve();
    }, 0);
  });

  //return the promise
  return promise;

}

var doIt = createPromise();
var doIt2 = createPromise();
var doIt3 = createPromise();
var doIt4 = createPromise();

doIt.then(function() {
  console.log('1');
});

doIt2.then(function() {
  console.log('2');
});

doIt3.then(function() {
  console.log('3');
});

doIt4.then(function() {
  console.log('4');
});

console.log('5');
