/* 1. Train recursion

a) Fibonacci numbers, starting from the 3rd number 
   are created as sum of two previous numbers. 

   The beginning of Fibonacci sequence:

   1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

   Create function that gets number n and shows 
   sequence of n Fibonacci numbers.

b) Use document.createElement, etc. and recursion 
   to create recursion-pic01.jpg */

console.log('====================================');
console.log('a');
console.log('====================================');

function recursion(n) {
    if (n < 2) {
        return n;
    }
    return recursion(n - 2) + recursion(n - 1);
}
console.log(recursion(6));

console.log('====================================');
console.log('b');
console.log('====================================');

function createDiv(n) {
    if (n === 0) {
        return;
    }
    const div = document.createElement('div');
    div.style.width = "90%";
    div.style.height = "90%";
    div.style.backgroundColor = "black";
    div.style.border = "2px solid red";
    document.body.appendChild(div);
    createDiv(n - 1);
}
createDiv(6);