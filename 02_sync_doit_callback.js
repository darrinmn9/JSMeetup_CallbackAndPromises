function doit(callback) {
  console.log('1');
  callback();
}

function doit2(callback) {
  console.log('2');
  callback();
}

function doit3(callback) {
  console.log('3');
  callback();

}

function doit4() {
  console.log('4');
}

doit(function() {

  doit2(function() {

    doit3(function() {

      doit4();

    });

  });

});

console.log('5');

// http://latentflip.com/loupe/
