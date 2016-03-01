var promises = 0;


function createPromise() {
  //create a Promise
  var promise = new Promise(function(resolve, reject) {
    setTimeout(function resolvePromise() {
      console.log(promises);
      if (promises < 4) {
        promises++;
        var x = createPromise();
      }
      resolve();
    }, 1000);

  });

  return promise;
}


createPromise();


console.log('5');
