"use strict"



// var s = function sequence(start, step) {
//   var numb = [];
//
//   function gen() {
//     if (!start) {
//       start = 0;
//     };
//     if (!step) {
//       step = 1;
//     };
//     // if (!start) {
//     //   this.start = 0;
//     // };
//     // if (!step) {
//     //   this.step = 1;
//     // };
//     // this.start = start;
//     // this.step = step;
//     start = start + step
//     numb.push(start);
//   };
//
//   return function take(x) {
//     for (var i = 0; i < x; i++) {
//       gen();
//     };
//     return numb
//   };
// };
//
//
// console.log(s()(5));

function sequence(start, step) {
  var numbers = [];

  function gen() {
    if (!start) {
      start = 0;
    };
    if (!step) {
      step = 1;
    };
    start = start + step;
    numbers.push(start);
  };

  function take(gen, x) {
    for (var i = 0; i < x; i++) {
      gen();
    };
    return numbers
  };

  take(gen, 5);
  return numbers
};


console.log(sequence(5,10));






// !!!!!!!!!!!!!!
