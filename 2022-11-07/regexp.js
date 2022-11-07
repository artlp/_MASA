let str01 = "Broken Crayons stilL coLOR";

// we want to replace the first L with *
console.log(str01.replace(/L/, '*'));

// we want to replace all Ls with *
// * modifiers: (i, g) 
// * g - global i - ignore case
console.log(str01.replace(/L/g, '*'));
console.log(str01.replace(/L/gi, '*'));


// MISSION
let str02 = 'Ali-Baba in Adis-ABeba said ABracadaBra: ABC'
// replace all "ab" (any case) by "$$"

console.log(str02.replace(/ab/gi, '$\$\$'));


// we want to replace L,l,C,c,R,r with B
console.log(str01.replace(/[LRC]/gi, '🅱️'));
//! square brackets mean "OR" [LRC] = L or R or C

// in str02 remove all punctuation

console.log(str02.replace(/[: -,-./"]/gi, ''));
