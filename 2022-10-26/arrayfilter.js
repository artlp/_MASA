const foods = ['pizza', 'pasta', 'mac-and-cheese', 'falafel', 'hummus', 'jachnun', 'sabih'];
const drinks = ['wine', 'beer', 'martini', 'water', 'wodka', 'tea', 'cola'];

// * FILTER() - 
// * RETURNS NEW ARRAY
//* ///////////////////////////////////////////////////////////
//* //////////// filter() ///////////////////////////////////////
//* ///////////////////////////////////////////////////////////
//* //////  1. returns new array - it could be smaller than the original one
//* //////  2. it's callback function should return true or false,
//* //////      and depending on it the current element will be
//* //////      added or not added to the new array
console.log(`const foods = ['pizza','pasta','mac-and-cheese','falafel','hummus','jachnun','sabih']`);


console.log(`const drinks = ['wine','beer','martini','water','wodka','tea','cola']`);


console.log(`CREATE NEW ARRAY SHORTDRINKS FROM DRINKS WITH DRINK LETTERS <= 4`);

const shortdrinks = drinks.filter(e => e.length <= 4);
console.log(shortdrinks);


console.log(` 
MISSION CREATE FOODS => FOODPJHM WITH FOODS STARTING ONLY WITH LETTERS P, J, H, M

`);
const foodsJPHM = foods.filter(e => {
    return e.charAt(0) === "p" || e.charAt(0) === "j" || e.charAt(0) === "m" || e.charAt(0) === "h";
});
console.log(foodsJPHM);


const nums = [4.5, 1, 2, 56, 78, 5, 100];

console.log(`// MISSION: create new array that will contain only the numbers that
// in the original array are equal to their indexes`);

const newNums = nums.filter((e, i) => {
    return i === e;
});

console.log(newNums);