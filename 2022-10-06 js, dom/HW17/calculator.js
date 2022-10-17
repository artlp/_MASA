const input1 = document.querySelector("#num1");
const input2 = document.querySelector("#num2");
const output = document.querySelector(".output");
let num1;
let num2;


function getInput() {
num1 = +input1.value;
num2 = +input2.value;
}

function add() {
    getInput();
    result = num1 + num2;
    return output.innerHTML = result;
}
function subtract() {
    getInput();
    result = num1 - num2;
    return output.innerHTML = result;
}
function multiply() {
    getInput();
    result = num1 * num2;
    return output.innerHTML = result;
}
function divide() {
    getInput();
    result = num1 / num2;
    return output.innerHTML = result;
}
function divideIntegers() {
    // Math.floor(num1/num2);
    // result = num1 % num2;
    getInput();
    return output.innerHTML = `${num1} % ${num2} is ${Math.floor(num1/num2)} and remainder is ${num1 % num2}`;
}
function power() {
    getInput();
    result = num1 ** num2;
    return output.innerHTML = result;}