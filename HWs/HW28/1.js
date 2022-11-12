/* 1. Recursion.
   a) Make a function that gets a number 
      and finds the sum of all the numbers from 1
      to this number 

   b) Like a, but it should be the sum of all 
      the even numbers from 1 to this number

   c) Make a function that gets a number 
      and creates a string from this number till 1
      like 5 4 3 2 1

   d) Like c but more complicated: 5 4 3 2 1 2 3 4 5
    */

console.log(`~~~~~A~~~~~`);
function sum(n) {
    if (n <= 1) {
        return n;
    }
    return n + sum(n - 1);
}
console.log(sum(6));

console.log(`~~~~~B~~~~~`);
function sumb(n) {
    if (n <= 1) {
        return n;
    }
    if (n % 2 === 0) {
    return n + sum(n - 1);
    } else {
    }
}
console.log(sumb(9));

console.log(`~~~~~C~~~~~`);
function c(x) {
    if (x <= 0) {
        return x;
    }
    console.log(x);
    return x - c(x - 1);
}
c(6);

console.log(`~~~~~D~~~~~`);
function d(x) {
    console.log(x);
    if (x === 1) {
        return x;
    }
    d(x - 1);
    console.log(x);
}
d(3);