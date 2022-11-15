/* 2. Destructuring objects.
a)Write a function called displayName() 
that takes an object as an argument 
and prints the person's first and last name. 
Use object destructuring in the function argument.  */

const person = {
    first: 'Elon',
    last: 'Musk',
    twitter: '@elonmusk',
    company: 'Space X'
};
console.log("A");
function displayName(a) {
    let { first, last, twitter, company } = person;
    console.log(first, last);
}
displayName(person);

/* b)  Write a function called calculateSalesTotals() which returns an array with new two new keys (sale and total). The key 'sale' equals the calculated sale price based on the original price and the discount. The key 'total' equals the computed total based on stock, the original price and the discount. You have to use Object Destructuring on the objects in the sales array and Object Default Values for the discount key. The default value would be 0.0.
 */
const sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];
console.log("B");
function calculateSalesTotals(array) {
    sales.forEach((e,i,ar) => {
    let {item, stock, original, discount} = sales[i];
    e.discount ? e.sale = original - original * discount : e.sale = original
    e.total = e.sale * stock;
    return sales;
})
}

calculateSalesTotals(sales);
console.log(sales);
/* EXPECTED OUTPUT (array of objects):
[
  {
    item: "PS4 Pro",
    original: 399.99,
    sale: 399.99,
    stock: 3,
    total: 1199.97
  },
  {
    discount: 0.1,
    item: "Xbox One X",
    original: 499.99,
    sale: 449.991,
    stock: 1,
    total: 449.991
  },
  {
    item: "Nintendo Switch",
    original: 299.99,
    sale: 299.99,
    stock: 4,
    total: 1199.96
  },
  {
    discount: 0.8,
    item: "PS2 Console",
    original: 299.99,
    sale: 59.99799999999999,
    stock: 1,
    total: 59.99799999999999
  },
  {
    discount: 0.65,
    item: "Nintendo 64",
    original: 199.99,
    sale: 69.9965,
    stock: 2,
    total: 139.993
  }
]
 */