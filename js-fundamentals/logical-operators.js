if (5 === 5 && 6 === 7) {
  console.log(true);
} else {
  console.log(false);
}


let userSettings = null;
let defaultSettings = { name: 'Default'};

console.log(userSettings || defaultSettings);
console.log(!userSettings || defaultSettings);
console.log(userSettings && defaultSettings);
