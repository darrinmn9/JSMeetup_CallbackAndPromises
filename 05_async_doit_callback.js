setTimeout(function doit1() {
  console.log('1');

  setTimeout(function doit2() {
    console.log('2');

    setTimeout(function doit3() {
      console.log('3');

      setTimeout(function doit4() {
        console.log('4');

      }, 0);

    }, 0);

  }, 0);

}, 0);


console.log('5');



// http://latentflip.com/loupe/
