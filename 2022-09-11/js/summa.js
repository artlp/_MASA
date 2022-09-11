var num1 = prompt("Enter num1");
var num2 = prompt("Enter num2");
var num3 = Number(num1) + +num2; //* CONVERTING TO NUMBERS
console.log('Sum: ' + num3);
console.log('Datatype of num3: ', typeof num3);
//! ALL INPUTS ARE STRINGS
//! Number(str) > converts str to number
//! +str > converts str to number 