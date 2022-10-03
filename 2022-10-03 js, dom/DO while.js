// ! DO WHILE 

// let answer = prompt("Are you going to the movie? y/n").toUpperCase();
// while (answer !== 'N' && answer !== 'Y') {
//     answer = prompt ("Please answer");
// }

do {
    answer = prompt("Are you going to the movie? y/n").toUpperCase();
}
while (answer !== 'N' && answer !== 'Y');

console.log(`you answered ${answer}`);

console.log(`// MISSION: Your opponent should guess a word "frog".
//   Ask him: which animal has a wide mouth?
//  Stop when he guessed. Use DO WHILE`);
do {
    guess = prompt("Which animal has a wide mouth? (type space to stop)");
}
while ((guess !== " ") && (guess !== "frog"));
console.log(`<span style="color:rgb(216, 109, 70)">Yes it was a frog</span> <br>`);


const cities = ['Rechovot', 'Tel Aviv', 'Moscow', 'London', 'New York', 'Barcelona', 'Milan'];
// const cities = [];
let i = 0;
// while (i < cities.length) {
//     console.log(cities[i]);
//     i++;
// }

// i = 0;
do {
    console.log(cities[i]);
    i++;
} while (i < cities.length);