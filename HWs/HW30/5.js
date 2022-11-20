
// 5. Regular Expressions

//  a) 
let report = 'string theory';

//  Using regular expression and test() check if report 
//  contains "ring"

console.log("a " + /ring/.test(report));

//  b)  Using regular expression and test() check if report 
//  contains "fire"
console.log("b " + /fire/.test(report));

//  c) 
let words = ['cat', 'attempt', 'tattle'];
let filtered = words.filter(f => /tt/.test(f));
console.log("c " + filtered);
//     Using regular expression and test()  get all 
//     the elements that contain 'tt'

//    The HINT is at the end of the file

//   d) PAY ATTENTION
//   NEW ARRAY FUNCTION words.every().
//    Use it like words.filter() - with callback function.
let every = words.every(f => /at/.test(f));
console.log("d " + every);
//    words.every() will return "true" if every 
//    element of words sets condition to "true",
//    and will return "false" if some elements 
//    set the condition to "false".
//    ----------------------------------------------
//    MISSION: check if all the elements contain 'at'

//   e) PAY ATTENTION
//   NEW ARRAY FUNCTION words.some().
//    Use it like words.filter() - with callback function.
let some = words.some(f => /stat/.test(f));
console.log("e " + some);
//    words.some() will return "true" if at least 
//    one of the elements of words sets condition to "true",
//    and will return "false" if all the elements 
//    set the condition to "false".
//    ----------------------------------------------
//    MISSION: check if any element contains 'stat'

//   f) 
const notCats = ['Cat', 'cot', 'CATER', 'SCat', 'ScUtTLe'];
const filtCats = notCats.filter(cat => /cat/gi.test(cat));
console.log("f " + filtCats);

//    Filter the array to contain only the elements that has 
//    "cat" (in any case) in them

//   g) Construnct regular expression using 
const petRE = /dog/;

let str111 = 'They bought a dog';
let str222 = 'A cat crossed their path';

//      Check str111 and str222 - if they contain the regular expression
console.log(`g ${petRE.test(str111)}, ${petRE.test(str222)}`);
//    h) Now construct regular expression using
let greeting = 'Hi';
const greetingRE = new RegExp(greeting, "i");

str333 = "HI THERE";
str444 = "My height is like a height of Venus";
console.log(greetingRE.test(str333));
console.log(greetingRE.test(str444));
//     Check if str33 and str444 contain the regular expression

let str555 = '1,2,3,4'
//      Using regular expression
//      - Replace only the first "," by "-"
//      - Replace all the "," by "-"
console.log(str555.replace(/,/,'-'));
console.log(str555.replace(/,/g,'-'));
//   j) Replace all "art" strings (case does not matter)
//      by "2"

   let str666 = 'cArT PART tart mArt'
console.log(str666.replace(/art/gi,"2"));
//   k) Check if the given input strings contain "two" irrespective of case.

let s1 = 'Their artwork is exceptional'
let s2 = 'one plus tw0 is not three'
let s3 = 'TRUSTWORTHY'
console.log(/two/gi.test(s1),/two/gi.test(s2),/two/gi.test(s3));
//   l) For the given array, filter all elements that do not contain e.

let items = ['goal', 'new', 'user', 'sit', 'eat', 'dinner']
let filt = items.filter(item => {
    return !/[e]/gi.test(item)
});
console.log(filt);
//    The code should look like (so write the appropriate function "test()"):
//    const filteredItems = items.filter(w => test(w))

let str777 = 'They ate 5 apples and 5 oranges'
//    - Replace first occurrence of 5 with five for the given string.
//    - Replace all occurrences of 5 with five for the given string.
console.log(str777.replace(/5/g,'five'));
console.log(str777.replace(/5/,'five'));
//   n) Replace all occurrences of note irrespective of case with X.

let str888 = 'This note should not be NoTeD'
console.log(str888.replace(/note/gi,"X"));