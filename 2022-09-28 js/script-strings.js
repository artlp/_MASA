//* str.padStart(), str.padEnd()
const zipCodes = [678, 5020129, 100685, 2345, 2098102];

//* we need a function which takes one number and returns a string of 7 characters padded with zeroes at the start


function sevenChar(num) {
    return String(num).padStart(7, '0');
    //* option 2: return num.toString() 

}
console.log(sevenChar(2323));


for (i = 0; i < zipCodes.length; i++) {
    console.log(sevenChar(zipCodes[i]));
}

const foods = ['lasagna', 'hummus', 'pizza'];
const drinks = ['water', 'cocktail', 'juice']

console.log(`// MISSION: show all the foods on one row
//          and all the drinks exactly below them on the next row, like this:

/// lasagna   hummus     pizza
///  water     coctail    juice

// use padStart() or padEnd()`);

let foodsLength = '';
let drinksLength = '';

for (i = 0; i< foods.length; i++) {
    foodsLength = foods[i].length;
    drinksLength = drinks[i].length;
    console.log(foodsLength, drinksLength);
    if (foodsLength > drinksLength) {
        drinks[i] = drinks[i].padEnd(foodsLength,' ')
    } else if (drinksLength > foodsLength) {
        foods[i] = foods[i].padEnd(drinksLength,' ')
    }

}
console.log(foods.join('     ') + "\n" + drinks.join('     '));


//! option 2
strFoods = ''
strDrinks = ''

for (let i = 0; i < foods.length; i++) {

    if (foods[i].length >= drinks[i].length) {
        strFoods += foods[i].padEnd(foods[i].length+2,' ')
        strDrinks += drinks[i].padEnd(foods[i].length+2,' ')
    } else {
        strFoods += foods[i].padEnd(drinks[i].length+2,' ')
        strDrinks += drinks[i].padEnd(drinks[i].length+2,' ')
    }

}

console.log(strFoods)
console.log(strDrinks)

//! option 3
let strFoods2 = ''
let strDrinks2 = ''

let maxLength =0;

for (let i = 0; i < foods.length; i++) {

    if (foods[i].length > maxLength) maxLength = foods[i].length;
    if (drinks[i].length > maxLength) maxLength = drinks[i].length;
}

for (let i = 0; i < foods.length; i++) {

    strFoods2 += foods[i].padEnd(maxLength+3,' ');
    strDrinks2 += drinks[i].padEnd(maxLength+3,' ');

}

console.log(strFoods)
console.log(strDrinks)