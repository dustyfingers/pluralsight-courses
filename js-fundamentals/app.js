// rest parameters
// rest parameters can pick up any number of function args
// the rest element must be the last parameter to be passed into the function
//
// function sendCars(day, month, ...allCarIds) {
//   allCarIds.forEach(id => console.log(id));
// }
// sendCars(100, 200, 555);
// sendCars('Monday', 'January', 100, 200, 555);



// destructuring arrays lets you assign all of the elements of an array to individual variables
//
// let carIds = [1, 2, 5, 7];
// let [car1, car2, car3, car4] = carIds;
//
// console.log(car1, car2, car3, car4);



// consider this...
// 
let carIds = [1, 2, 5];
let car1, remainingCars;
[car1, ...remainingCars] = carIds;

console.log(car1, remainingCars);
