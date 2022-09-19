// const retirementAge; // ! error, as CONST must have a value
const retirementAge = 69;
// retirementAge = 70; // ! error, assignment to constant variable.
// console.log(`a = ${a}
// b = ${b}`); // ! Uncaught ReferenceError: Cannot access 'b' before initialization

//* HOISTING: JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.

//* Hoisting allows functions to be safely used in code before they are declared.

//* Variable and class declarations are also hoisted, so they too can be referenced before they are declared. Note that doing so can lead to unexpected errors, and is not generally recommended.

// * Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized.


show()

var a = 70;
let b = 80;
console.log(`a = ${a}
b = ${b}`);

function show() {
    console.log(`I am here`);
}

for (var i = 0; i < 3; i++) {
    console.log(`var i = ${i}`);
}
console.log(` after the loop, var i = ${i}`);

for (let j = 0; j < 3; j++) {
    console.log(`let j = ${j}`);
}
// console.log(`let j = ${j}`); //* let exists only inside its command block