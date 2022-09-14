var str1 = 'synChrOphasAtron';

str1=str1.toLowerCase();
console.log(`first letter of word '${str1}' is '${str1[0]}'`);
console.log(str1.length);
console.log(str1[str1.length-1]);

var str2 = prompt("Enter a word");
str2=str2.toLowerCase();
console.log(`fourth letter of word '${str2}' is '${str2[3]}' and second to last letter is ${str2[str2.length-2]}`);
console.log(str2.length);

var str5 = 'arror';
str5[0]='e';
console.log(str5); //! DOESN'T WORK BECAUSE YOU CAN'T CHANGE STRINGS
console.log(str5.replace('a','e'));
console.log(str5);
str5=str5.replace('a','e'); //! we replace var str5 with fixed version of str5 to store it
console.log(str5, str5);

var str6 ="Van more error";
console.log(str6);
str6=str6.replace('Van', 'One');
console.log(str6);
str6=str6.replace(str6[1], 'n'); //! IT CHANGES THE LETTER N, NOT CHARACTER IN POSITION [1]
console.log(str6);
str6=str6.replace(str6[2], 'e');
console.log(str6);