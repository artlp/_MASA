let str01 = "Broken Crayons stilL coLOR";

// we want to replace the first L with *
console.log(str01.replace(/L/, '*'));

// we want to replace all Ls with *
// * modifiers: (i, g) 
// * g - global i - ignore case
console.log(str01.replace(/L/g, '*'));
console.log(str01.replace(/L/gi, '*'));


// MISSION
let str02 = 'Ali-Baba in Adis-ABeba said ABracadaBra: ABC';
// replace all "ab" (any case) by "$$"

console.log(str02.replace(/ab/gi, '$\$\$'));


// we want to replace L,l,C,c,R,r with B
console.log(str01.replace(/[LRC]/gi, '🅱️'));
//! square brackets mean "OR" [LRC] = L or R or C

// in str02 remove all punctuation

console.log(str02.replace(/[: -,-./"]/gi, ''));

str03 = "hello world my name is red blue screen SCreen ";
console.log(str03.replace(/red|read|blue|screen/gi, "TEST")); //! in regex | = OR

str04 = "I love horses and cats";
str05 = "I hate sharks";
if (/cat|dog|horse/.test(str04)) {
    console.log("it is there");
} else {
    console.log("it's not there");
}


console.log(str03.replace(/[Q-WA-H]/gi,"■")) //! Replace all letters in the span from Q to W and from A to H
