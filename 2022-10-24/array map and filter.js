const foods = ['pizza', 'pasta', 'mac-and-cheese', 'falafel', 'hummus', 'jachnun', 'sabih'];
const drinks = ['wine', 'beer', 'martini', 'water', 'wodka', 'tea', 'cola'];
//* map()
//* 1. returns a new array with the size of the original array;
//* 2. its callback function should return something and it will be the new element of the new array

//* we want to create array foodsUpper with all the elements in uppercase

const foodsUpper = foods.map((e) => {
    return e.toUpperCase();
});
console.log(foodsUpper);

//* MISSION: go over foods with map(), pass the elment and the index 
//*             to it's callback function,
//* show    and create new array "meals", consisting of "pizza wine","pasta beer" ..

const meals = foods.map((e,i) => {
    return `${e} ${drinks[i]}`;
})
console.log(meals);

//* we want to copy array foods into foods3

const foods3 = foods.map((e) => {
    return `${e}`;
})
console.log("foods3 array: " +foods3);