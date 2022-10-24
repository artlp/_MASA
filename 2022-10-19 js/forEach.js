const foods = ['Pizza', 'Lasagna', 'Hinkali', 'Hummus', 'Falafel', 'Sabih', 'Hamburger'];
const drinks = ['Water', 'Juice', 'Vodka', 'Wine', 'Beer', 'Milk', 'Soda'];

//* forEach is a method for arrays
//* gets 1 parameter - CALLBACK function

foods.forEach((e) => {
    console.log(e.charAt(0));
});

const menu = [];
foods.forEach((el, idx) => {
    menu.push(`${idx + 1}. ${el}`);
});
console.log(menu);

drinks.forEach((e) => {
    console.log(e);
});

const array2 = [];
foods.forEach((_e, i, _d) => {
    array2.push(`${foods[i]} and ${drinks[i]}`);
    console.log(array2[i]);
});


drinks.forEach((a, b, _c) => {
    drinks[b] = a.toUpperCase();
});
console.log(drinks);

const numbers = [9, 121, 144, 625, 64, 81];
numbers.forEach((_e, i) => {
    numbers[i] = Math.sqrt(numbers[i]);

});
console.log(numbers);


const nums = [[1,2,5,6,107.1], [0,4,5], [2.3,4.5,0.1,345],[23,4,5,6,7]];
const nums2 = [[1,1,1,1,1], [3,0,2], [5,5],[1,1,1,1,1,1,1,1,1,1]];
//! MISSION - FIND SUM OF ALL NUMBERS
let sum = 0;

function sumOfAll(array) {
    sum=0;
array.forEach((e,i,array) => {
    e.forEach((x,j) => {
        sum += x;
    });
});
return sum;
}
console.log(sumOfAll(nums) + ", " + sumOfAll(nums2));
// sumOfAll(nums2);
