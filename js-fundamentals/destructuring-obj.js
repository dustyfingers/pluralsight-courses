// destructing objects
// this works
//
// let car = { id: 5000, style: 'converitble', color:'black' };
// let { id, style } = car;
//
// console.log(id, style);

// this will also work! watch this one carefully tho!
//
let car = { id: 5000, style: 'converitble', color:'black' };
let id, style;
({ id, style } = car);

console.log(id, style);
