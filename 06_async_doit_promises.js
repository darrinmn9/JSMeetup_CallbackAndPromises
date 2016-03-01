var doIt, doIt2, doIt3, doIt4;

function createPromise(num) {
  //create a Promise
  var promise = new Promise(function(resolve, reject) {
    setTimeout(function resolvePromise() {
      // console.log(num);
      resolve();
    }, 1000);
  });

  //return the promise
  return promise;

}

doIt = createPromise(1);

doIt.then(function(prom) {
  console.log('1');
  doIt2 = createPromise(2);
  return doIt2;

}).then(function(prom) {
  console.log('2');
  doIt3 = createPromise(3);
  return doIt3;

}).then(function(prom) {
  console.log('3');
  doIt4 = createPromise(4);
  return doIt4;

}).then(function() {
  console.log('4');
});

console.log('5');
