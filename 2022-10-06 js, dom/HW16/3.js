//3. str='One, day, I, am, going, to, make, onions, cry'
// Remove the commas - use split() and join()

let str='One, day, I, am, going, to, make, onions, cry';
let newArr = str.split(", ");
let newstr = newArr.join(` `);
console.log(newstr);