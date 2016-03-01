var doIt, doIt2, doIt3, doIt4;

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

doIt = createPromise();
doIt2 = createPromise();
doIt3 = createPromise();
doIt4 = createPromise();

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
