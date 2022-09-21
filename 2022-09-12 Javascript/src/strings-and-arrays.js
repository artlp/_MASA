console.log(`strings-and-arrays.js loaded`);
var str1 = 'encyclopedia';
str1 = str1.toUpperCase();
console.log(str1);
// STRING IS IMMUTABLE - WE CAN'T CHANGE IT, ONLY ASSIGN A NEW VALUE TO IT
var str2 = 'synChroPhaSotRoN';
str2 = str2.toLowerCase();
console.log(`${str2}`);


/****************************
 * 
 * 
//* 'qwe'.repeat(3) - repeats the string QWE - 3 times
//* output: qweqweqwe
 * 
 * 
 */

// ! ARRAYS
const arr1 = ['sdad', 'Tel-Aviv', 'Moshe', '', 'lalala'];
const arr2 = ['sdad', str1, 3654, '', null, true, { color: 'red' }, 4.5];


/************************
 *  ! SUBSTRING
 *  * str.substring(start, length) - cuts a substring with a given length from the starting position
 * 
 * 
 * 
 */
let str = 'synCHroPHasotRon';

// MISSION: put into str2 part of str , that starts at the 1st letter(Human)
//  and has length of 7.
//      Put into str3 part of str from the 8th letter (human)
//       and till the end
let str4 = str.substring(0, 7);
let str5 = str.substring(7);
console.log(str, str4, str5);
/*************
 * 
 * ! INDEX OF 
 * * str.indexOf("word or string") - finds index of "word or string"
 * * str.indexOf("substr", start) - returns index of "substr", looking from >start< 
 * 
 * 
 */
console.log(`Index of Ron in ${str} is ${str.indexOf("Ron")}`);
console.log(`Index of Don in ${str} is ${str.indexOf("Don")}`);
let firstLocation = str.indexOf('s');
console.log(`Index of first 's' in ${str} is ${firstLocation}`);
let secondLocation = str.indexOf('s', firstLocation + 1); //! look for another 's', starting from location of first 's' + 1
console.log(`Index of second 's' in ${str} is ${secondLocation}`);


console.log(`//*MISSION: find all the 3 indexes of 'Rehovot', like we did before`);
const cities = ['Beer-Sheva', 'Rehovot', 'Ness Ziona', 'Rishon le Zion', 'Tel-Aviv', 'Holon', 'Rehovot', 'Ashkelon', 'Ashdod', 'Ashkelon', 'Ashdod', 'Rehovot'];
let firstLocation1 = cities.indexOf('Rehovot')
let secondLocation1 = cities.indexOf('Rehovot', firstLocation1+1)
let thirdLocation1 = cities.indexOf('Rehovot', secondLocation1+1)
console.log('indexes of "Rehovot": ', firstLocation1, secondLocation1, thirdLocation1);

