// var newWord;

// function avgOfTwo(n1, n2) {

//     var avg = (n1 + n2) / 2;

//     console.log(`Average of ` + n1 + ` and ` + n2 
//     + ` equal to ` + avg);

//     console.log(`Average of ${n1} and ${n2} equal to ${avg}`);

// }
// avgOfTwo(7, 10);

// /// MISSION: create function firstAndLast()
// /// that gets a word and shows the first and 
// /// the last letter of the word

// function firstAndLast(myWord) {

//     console.log(myWord[0]);
//     console.log(myWord[myWord.length - 1]);

// }

// firstAndLast('encyclopedy');

// newWord = prompt('Give me some word');

// firstAndLast(newWord);

// newWord = prompt('Give me some word again');

// firstAndLast(newWord);

/***************************** */

function avg(a, b, c) {

    var avg = (a + b + c) / 3;
    console.log(`average of ${a} and ${b} and ${c} equals ${avg}`);

}

// function avg2() {

//     var a = +prompt('Enter the first number:')
//     var b = +prompt('Enter the second number:')
//     var c = +prompt('Enter the third number:')

//     var avg = (a + b + c) / 3;
//     console.log(`average of ${a} and ${b} and ${c} equals ${avg}`);

// }

//* find average of 55, -1 and 13
avg(55, -1, 13);
//*
function avg3(a, b, c) {

    var avg = (a + b + c) / 3;
    console.log(`average of ${a} and ${b} and ${c} equals ${avg}`);
    return avg;

}
//* find sum of two averages: 4.5,3.5,12 and -1,-13,45
console.log(avg3(4.5, 3.5, 12));
console.log(avg3(-1, -13, 45));
console.log(avg3(4.5, 3.5, 12) + avg3(-1, -13, 45));


//* Calculate V((5*6)-14) (square root)

console.log(Math.sqrt(5 * 6 - 14)); // the result
console.log(Math.sqrt(Math.sqrt(5 * 6 - 14))); // square root of the result

//* This function gets a word and returns the 1st letter in uppercase
function return1stUpper(str) {
    return str[0].toUpperCase();

}
console.log(return1stUpper(prompt('Enter word1')) + ". " + return1stUpper(prompt('Enter word2')) + ". " + return1stUpper(prompt('Enter word3')));

//* УЗНАТЬ ИНИЦИАЛЫ ЧЕЛОВЕКА
function initials(x, y, z) {
    var first = x[0].toUpperCase();
    var second = y[0].toUpperCase();
    var last = z[0].toUpperCase();
    return `${first}. ${second}. ${last}.`
}
console.log(initials("михаил", "владимир", "иванов"));
console.log(initials(prompt('Enter name'), prompt('Enter second'), prompt('Enter last')));


//* BMI CALCULATOR

function bmiCalculator() {
    let height = prompt("Enter your height in meters");
    let weight = prompt("Enter your weight in kgs");
    let firstName = prompt("Enter your name")
    let bmi = Math.round(weight / Math.pow(height, 2));
    if (bmi < 18.5) {
        console.log(`${firstName}, your BMI is ${bmi}, so you're underweight. Eat a burger or two`);
    }
    if (bmi >= 18.5 && bmi < 24.9) {
        console.log(`${firstName}, your BMI is ${bmi}, you are in peak condition.`);
    } else {
        console.log(`${firstName}, your BMI is ${bmi}, you are overweight.`);
    }
    return bmi;
}
bmiCalculator();
