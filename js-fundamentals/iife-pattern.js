
// immediately invoked function expressions
//

// // regular function with no name
// //
// function() {
//   console.log('in function');
// }

// // immediately invoked function expression
// // wrapped in paren and paren after. this expression runs immediately
// //
// (function() {
//   console.log('in function');
// })();


// app example
//
let app = (function(){
  let carId = 123;
  console.log('in function');
  // return value of iife is assigned to 'app' or the variable
  return {};
})();
console.log(app);
