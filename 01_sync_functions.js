function doit() {
  console.log('1');
  doit2();
}

function doit2() {
  console.log('2');
  doit3();
}

function doit3() {
  console.log('3');
  doit4();

}

function doit4() {
  console.log('4');
}

doit();
console.log('5');


// http://latentflip.com/loupe/
