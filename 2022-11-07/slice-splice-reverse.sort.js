//! ARRAY SLICE / ARRAY SPLICE

// * slice and substring difference :
// * slice can work with negative indexes too.
// * slice works for strings and arrays
//* slice is more consistent
// * slice is slightly more "best practice"
// * slice doesn't modify the original string/array

let str30 = 'encyclopedia';
console.log(str30.slice(3,-4)); // yclop
console.log(str30.slice(-8)); // clopedia (from -8 to the end)

const cities = ['Beer-Sheva','Rechovot','Nes-Ziona','Rishon-le-Zion','Tel-Aviv','Holon','Rechovot','Ashquelon','Ashdod','Rechovot'];

console.log(cities.slice(-(cities.length-1), -1));

//* SPLICE
/* Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.

@param deleteCount — The number of elements to remove.

@returns — An array containing the elements that were deleted. */

console.log(cities.splice(2, 3, ["Moscow", "London"]))
cities.splice(4,0, "Petach-Tikva", "Jerusalem","Kfar-Saba");
//! SPLICE WORKS WITH NEGATIVE INDEXES
cities.splice(cities.length-1,1) //delete last item from the array
console.log(cities);

//! REVERSE METHOD
str31 = `А роза упала на лапу Азора.`
str31 = str31.toLowerCase().replaceAll(' ', '').replaceAll('.', '');
// str31 = str31.replaceAll(' ', '');
// str31 = str31.replaceAll('.', '');

let str31Reversed = str31.split('').reverse().join('');
console.log(str31Reversed);


//! ARRAY SORT
// sort() without parameters sorts by alphabetical order
console.log(str31.split('').sort().join(''));