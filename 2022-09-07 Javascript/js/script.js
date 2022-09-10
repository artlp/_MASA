console.log("loaded");
console.log("Result of 5*6 is " + 5 * 6);
console.log("Result of 7+8-9 is " + [7 + 8 - 9]);
console.log("Result of 7+8-9 is", 7 + 8 - 9);

var num1 = 35;
var num2 = 7;
console.log(num1);
console.log(num1 + '/' + num2 + '=' + num1 / num2);

// declare 2 new number variables and show their sum exercise

var num3 = 40;
var num4 = 84;
console.log(num3 + '+' + num4 + '=' + (num3 + num4));

console.log(typeof num1);

// USE ONE OF YOUR VARIABLES (NUM1) AND SHOW ITS DATA TYPE THIS WAY

console.log("data type of " + num1 + " is a " + typeof num1);

console.log('Neil Armstrong said: "This is a small step for the human"');

// mission: if you have shoot, shoot, don't talk

console.log('In the movie Eli Wallah says: "If you have shoot, shoot, don\'t talk".');

console.log('Cities: Jerusalem \n\tTel-Aviv \n\tHaifa \n\tAshdod');

// MISSION: Show next phrase: do you want a seat near the window? Y/N

console.log('Do you want a seat near the window? \n Y\\N');


// var question = 'Do you have a clean shirt?';
// var answer = prompt(question);
// if (answer === 'yes') {
//     console.log("well done, wear it");
// } else {
//     console.log("it's a shame");
// }

var question2 = "What is your favorite color?";
var answer2 = "red";
if (answer2 === "red") {
    console.log("Great, it's like your eyes");
}

// MISSION: CHECK IF NUM1 IS NOT DIVISIBLE BY 5, IF NOT IT SHOULD SAY "IT IS NOT DIVISIBLE" 

if ((num1 % 6) !== 0) {
    console.log(num1 + " is not divisible by 6");
} else {
    console.log("NUM1 IS DIVISIBLE BY 6");
}
