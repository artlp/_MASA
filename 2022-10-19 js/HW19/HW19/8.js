const foods = ['pizza', 'falafel', 'paSTa', 'sandwich', 'saLAt', 'hummus', 'soup'];
const drinks = ['beer', 'water', 'coFFEe', 'tee', 'milk', 'juICe', 'cola'];

// a) Use forEach(), go over the array "drinks" and concatenate all it's elements into one string,
// like this: 'beer, water, coffee ....'
console.log("~~~8.A~~~");
let newStr = "";
drinks.forEach((e, i) => {
    if (i !== drinks.length - 1) {
        newStr += e + ", ";
        return;
    }
    if (i === drinks.length - 1) {
        newStr += e;
    }
});
console.log(newStr);


// b) Create function, avgOfArr(), that gets an array 
//  of numbers, calculates it's average (using forEach()) and rounds it to 2 digits after a dot.

console.log("~~~8.B~~~");
const nums = [1, 14.4, 23, 6433, 23.2];
let sum = 0;
nums.forEach((e) => {
    sum += e;
});
console.log((sum / nums.length).toFixed(2));

// c) Go over "foods". If the index is odd, show only 3 first characters of the food, otherwise - the whole food

console.log("~~~8.C~~~");
foods.forEach((e,i) => {
if (i % 2 === 0) {
    console.log(e.substring(0,3));
} else {
    console.log(e);
}

})

// d) Go over "foods" and capitalize all the foods.
// Now the array "foods"  should look like: ['Pizza','Pasta','Falafel', ...]
// IMPORTANT: use the third parameter that forEach passes to it's callback function
console.log("~~~8.D~~~");
foods.forEach((e,i,array) => {
array[i] = e.charAt(0).toUpperCase()+ e.substring(1).toLowerCase();
});
console.log(foods);