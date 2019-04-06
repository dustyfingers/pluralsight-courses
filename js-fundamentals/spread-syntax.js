// spread syntax lets you assign variables to individual elements in an array
// for example
//
// function startCars(car1, car2, car3) {
//   console.log(car1, car2, car3);
// }
//
// let carIds = [100, 200, 300];
// startCars(...carIds);


// in js both strings and arrays are iterables!!
//
// function startCars(car1, car2, car3) {
//   console.log(car1, car2, car3);
// }
//
// let carCodes = 'abc';
// startCars(...carCodes);


//you can combine spread syntax and rest parameters!!
//
function startCars(car1, car2, car3, ...rest) {
  console.log(car1, car2, car3, rest);
}

let carIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
startCars(...carIds);
