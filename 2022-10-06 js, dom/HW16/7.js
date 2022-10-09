// 7. includes(), join(), split(). 
//    a) Is the test too easy?
//       The teacher of a class would like to check whether the test was too easy.
//       The teacher has a simple check for that: If at least one of the students 
//       got 20 (over 20) on that test, then the test is deemed too easy.
//       Complete the function isTestTooEasy such that it returns true 
//       when it's too easy and false otherwise.

//       For example:
//       console.log(isTestTooEasy([10, 15, 13, 19])) // should return false
//       console.log(isTestTooEasy([7, 13, 20, 15])) // should return true
function isTestTooEasy(array) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        newArray.push(array[i] >= 20);
    }
    // console.log(newArray);
    if (newArray.includes(true)) {
        return true; } else {
            return false;
        }
}
console.log(isTestTooEasy([7, 13, 10, 15, 23, 2, 3, 4, 5, 6, 7, 8, 20]))

//    b) Create function convertToString such that it returns a string 
//       from the grades array it receives.
//       Look at the sample usage to see the expected format 
//       of the string.

//       // Sample usage:
//       console.log(convertToString([10, 15, 13, 19])) // "10 & 15 & 13 & 19"
//       console.log(convertToString([7, 13, 20, 15])) // "7 & 13 & 20 & 15"
function convertToString(array) {
    
    return array.join(" & ");
}
console.log(convertToString([7, 13, 20, 15, 23]))


//    c) const arOfAr = [[1,0,2,0,4],[3,3,3],[4,7],[9,9,0,1],[8,5]]

//       Go over the array of arrays arOfAr, perform join
//       on each array member, convert it into a number
//       and put into new numArray.

//       The result should be:

//       console.log(numArray);

//       // [10204,333,47,9901,85]

const arOfAr = [[1,0,2,0,4],[3,3,3],[4,7],[9,9,0,1],[8,5]]
let numArray = [];
for (i = 0; i < arOfAr.length; i++) {
    arOfAr[i] = arOfAr[i].join('');
    numArray[i] = +arOfAr[i];
}
console.log(numArray);