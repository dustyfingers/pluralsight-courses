

// if (5 === 5) {
//   let message = 'Equal';
// }
// console.log(message);//error

// only let has block scoping! its best practice to use let when you need a changeable variable 
let message = 'Outside';
if (5 === 5) {
  let message = 'Inside';
  console.log(message);//Inside
}
console.log(message);//Outside
