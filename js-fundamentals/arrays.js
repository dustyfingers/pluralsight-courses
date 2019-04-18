let carIds = [
  { carId: 123, style: 'sedan' },
  { carId: 456, style: 'convertible' },
  { carId: 789, style: 'SUV' }
];

// array iteration
carIds.forEach( car => console.log(car) );
carIds.forEach( (car, index) => console.log(car, index) )

// filering arrays
let convertibles = carIds.filter(
  car => car.style === 'convertible'
);
console.log(convertibles);

// .every array method
let result = carIds.every(
  car => car.carId > 0
);
console.log(result);

// find first match
let car = carIds.find(
  car => car.carId > 500
);
console.log(car);
