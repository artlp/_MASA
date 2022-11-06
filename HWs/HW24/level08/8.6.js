/* Level 8.6

Your program gets the array
 */
const arr2 = ['a', 'bc', 'def', 'geh', '', 'abcd', 'stop', 'start', 'tararam', 'olala', 'lalala', 'zzzz'];

/* It goes with the loop "for" over each third element of the array
starting from the one before end and ending with the first,
and converts the strings into arrays of the symbols, thus
creating new array of these new arrays.

For example from arr2 should be created
 */
//* [['l','a','l','a','l','a'],['s','t','a','r','t'],[],['b','c']]

const newArr = [];
for (i = arr2.length-2; i >= 0; i = i - 3) {
    let item = arr2[i];
    newArr.push(item.split('')); 
    }
    console.log(newArr)
