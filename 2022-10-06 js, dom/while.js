let answer = prompt('Marry me')

while (answer.toLowerCase() !== 'yes') {

    answer = prompt('Please, marry me')    

}

alert(`I knew it! It's the happiest day of my life!!!`) 

// //******************************** */
let num = '57847';
if (isNaN(num)) console.log('This is not a number');
else console.log('Yea, this is a number');
// //******************************** */
/* MISSION: ask a person for their favorite number 
 Stop when you get a number */

let answer = prompt('What is your favorite number?');
// We use !answer first, as it can be null and if so, answer.trim() will
// give the error cannot trim () null
while (!answer || !answer.trim() || isNaN(answer)) {

    answer = prompt('No, this was not a number at all.\nWhat is your favorite number?');

}

alert(`I like your favorite number ${answer} too`)

// MISSION:
const arr1 = ['pizza', 'falafel', 45, 42, 0, 124, 'lasagna'];
const arr2 = ['pizza', 'falafel', 45, 42, 124, 'lasagna'];
const arr3 = [];
// Write a function that goes over a given array (WHILE loop), shows each member
//  and stops at 0,
// dont forget i++ inside the loop

function stopAtZero(a) {

    let i = 0;

    while (a[i] !== 0 && i < a.length) {

        console.log(a[i]);
        i++;
    }


    console.log(`****\nThis function went over the array ${a}`);

}

stopAtZero(arr1);
stopAtZero(arr2);
stopAtZero(arr3);
//option 1
let num2 = prompt('Enter your favorite number')

while (!num2 || isNaN(num2)) {

    num2 = prompt('Enter your favorite number')

}
console.log(`Great! You favorite number is ${num2}`)

// option 2

let num2;

while (true) {

    num2 = prompt('Enter your favorite number')

    if (num2 && !isNaN(num2)) break;

}
console.log(`Great! You favorite number is ${num2}`) */

// MISSION:
// What color you like more? RED, BLUE OR PURPLE?
// Use loop while(true). Exit only when you 
// get one of the above colors

let str;

while(true) {

    str = prompt(`What color you like more? RED, BLUE OR PURPLE?`).toUpperCase();

    if (str === 'RED' || str === "BLUE" || str === "PURPLE") break;
}

console.log(`I w'll color your nose by ${str}`)

const arr4 = ['RED', 'GREEN', 'BLUE', 'YELLOW', 'Ashdod', 'WHITE', 'Rechovot', 'Nes-Ziona'];

for (let i = 0; i < arr4.length; i++) {

    if (arr4[i] === 'RED' || arr4[i] === "BLUE" || arr4[i] === "PURPLE"
        || arr4[i] === 'GREEN' || arr4[i] === "YELLOW" || arr4[i] === "WHITE")
        continue;

    console.log(`O! It is not a color!`);
    console.log(arr4[i]);

}


/********************* DO WHILE */

let answer = prompt(`Are you going to the movie? N/n/Y/y`).toUpperCase();

while (answer !== 'N' && answer !== 'Y') {

    answer = prompt(`Anyway, are you going to the movie? N/n/Y/y`).toUpperCase();

}

/******************* */

do {

    answer = prompt(`Again, are you going to the movie? N/n/Y/y`).toUpperCase();

} while (answer !== 'N' && answer !== 'Y');

// // MISSION: Your opponent should guess a word "frog".
// //   Ask him: which animal has a wide mouth?
// //  Stop when he guessed. Use DO WHILE


// /* Example of the difference between WHILE and DO WHILE */

// // we go over the array and show each member at the console:
// //const cities = ['Rechovot','Kiriat-Shmona','Rosh-Pina']
const cities = [];
let i = 0; //

while (i <= cities.length - 1) {

    console.log(cities[i]);
    i++;

}

// counter:
i = 0
// inintial value: 
let totalStr = ''
do {
    console.log(cities[i]);
    totalStr += cities[i]+' ';
    i++ ;
} while (i<= cities.length-1)

const cities2 = [`Rishon-Lezion`, `Ashquelon`, `Rechovot`, `Beer-Sheva`];
let j = 0;
let isFound = false; //! flag variable:
do {
    if (cities2[j].length < 10) {
        isFound = true;
    } else {
        j++;
    }
}

while (j < cities2.length && !isFound);
if (isFound) console.log(`city name shorter than 10 char is ${cities2[j]}`);
else (console.log(`there are only long name cities`));


console.log(`// MISSION:
// Check if there are failures (grade < 60)
// Use loop WHILE and exit if there is at least one falure.
// Show the grade of the falure.
`);
const grades = [85, 90, 92, 59, 88, 45];
let y = 0;
let fail = false;
while (!fail && y < grades.length) {
    if (grades[y] < 60) {
        fail = true;
        console.log(`${grades[y]} is below 60, FAIL`);
    } else {
        y++;
    }
}









