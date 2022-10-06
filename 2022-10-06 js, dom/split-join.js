let str25 = 'Small$$step$$for$$a$$man$$big$$step$$for$$the$$humanity'

//! .split turns string into array

let ar25 = str25.split(`$$`);
console.log(ar25);

let str26 = ar25.join(` `);
console.log(ar25.join(` `));
// console.log(ar25);
console.log(str26.split(``));
let str = "abracadabra";
// make an array with separator "a"
let arrayA = str.split("a");
let newStr = arrayA.join(``);
console.log(newStr);


let str27 = '250::134::10::200';
let ar27 = str27.split("::");
let str28 = ar27.join(".")
console.log(str28);