"use strict"



var s = function sequence(start, step) {
  var numb = [];

  function gen() {
    if (!start) {
      start = 0;
    };
    if (!step) {
      step = 1;
    };
    // if (!start) {
    //   this.start = 0;
    // };
    // if (!step) {
    //   this.step = 1;
    // };
    // this.start = start;
    // this.step = step;
    start = start + step
    numb.push(start);
  };

  return function take(x) {
    for (var i = 0; i < x; i++) {
      gen();
    };
    return numb
  };
};

console.log(s()(5));


var a = [4,4,5,5,3,3,3];
console.log(a);







// !!!!!!!!!!!!!!
