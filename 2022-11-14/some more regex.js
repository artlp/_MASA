///* ^ - negation
//* [^sdfg] - not any of s d f g

let str44 = " I love cats "
console.log(str44.replace(/[^o l s]/gi,"8"));
let phone = '972-54-3030303'
console.log(/[^0-9-]/gi.test(phone));


//* ^ - check start of string
//* $ - check end of string
let str45 = 'You love cats and I love dogs';
console.log(/^you | dogs$/gi.test(str45));

let str46 = "she cries and makes onions cry"
let str47 = "she cries and when this happens people also cry"
let str48 = "she cries and stops"
console.log(/(^she cries) (cry$)/gi.test(str46));

let str49 = `-What're you doing? -Nothing.`;
// "-" will not work with regex because you need an escape character

console.log(/[o\- ?]/.test(str49));


str50 = "One Dog"
console.log(/^... Dog$/.test(str50)) // ... - any 3 characters

//* /\w/ = /[a-zA-Z0-9_]/ - any word character, digit and underscore
//* /\W/ =  /[^a-zA-Z0-9_]/ NOT any word character, digit and underscore
//* /\s/ = /[ \n\t\r]/ - any whitespace character
//* /\S/ = /[^ \n\t\r]/ - NOT whitespace characters
//* /d - any digit ([0-9])
//* /D - not a digit 