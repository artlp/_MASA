let str22 = '   456565656   ';
// MISSION: exchange every '56' by 'XYZ'
console.log(str22.replaceAll(/56/g, 'XYZ'));

let str23 = 'She cries and makes onions CRY';
// MISSION: exchange every  'cr' by 'fl' (upper and lower)
console.log(str23.replaceAll(/cr/gi, 'fl'));


let str24 = `It, is: great; that * cows don't know how* to fly!`;
// Mission: exchange in str24 all i,a,e,o and spaces by $
// Mission: exchange 'cow', 'now', 'how' by 'RRR'
console.log(str24.replaceAll(/[aieo ]/gi, '$'));
console.log(str24.replaceAll(/(cow)|(now)|(how)/gi, 'RRR'));



// Mission: 
let str25 = `What's that, you put my hat in your chat!`;
///  Exchange 'What', 'that', 'chat', and ' hat' by '*'
console.log(str25.replaceAll(/_*(hat)/gi, '*'));
// Mission: exchange all the letters n,o,p,q,r,s,t
// by '-'
console.log(str25.replaceAll(/[nopqrst]/gi, '_'));



// Mission:
let str26 = '345My-mail025Superhero100@7777gmail.22com';
// Remove all the digits from the mail
console.log(str26.replaceAll(/[0-9]/gi, ''));



let strToFind = 'mail';
// new RegExp() - constructor of the class
// RegExp (regular expressions)
let regExp = new RegExp(strToFind, 'i');
/// It's the same as /Superhero/i
console.log(regExp.test(str26))
 // Mission: use RegExp and test() to check if there is 'mail' inside str26