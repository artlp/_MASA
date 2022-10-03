let q1 = (`What is 5+1?
a) 3
b) 4
c) 5
d) 6`);
let q2 = (`What is 5+2?
a) 9
b) 6
c) 7
d) 8`);
let q3 = (`What is 5+3?
a) 6
b) 8
c) 12
d) 9`);
let q4 = (`What is 5+4?
a) 10
b) 11
c) 9
d) 8`);
const rightAnswers = ['d', 'c', 'b', 'c'];
const userAnswers = [q1, q2, q3, q4];
let score = 0;
var stopGame = "";
let player = prompt("What is your name?");
document.getElementById("welcome").innerText = `Hello ${player}, your current score is ${score}`;
// while (stopGame !== 'y') {
for (i = 0; i < userAnswers.length; i++) {
    if ((i > 0) && (i < userAnswers.length)) {

        stopGame = prompt("Want to see another question?").toLowerCase();
        if (stopGame === 'n') {
            break;
        }
    } else { }
    let answer = prompt(`QUESTION NUMBER ${[i + 1]} 
    ${userAnswers[i].toLowerCase()}`);
    if (rightAnswers[i] === answer) {

        score++;
        document.getElementById("welcome").innerText = `Hello ${player}, your current score is ${score}`;
        console.log("CORRECT", score);
        document.querySelectorAll(".answer")[i].innerHTML = `<span style="color:green"> ${answer}</span>`;
        if (i !== 3) {
        stopGame = prompt("Want to continue?").toLowerCase();
        if (stopGame === 'n') {
            break;
        } else {

        }
    }
    } else {

        document.querySelectorAll(".answer")[i].innerHTML = `<span style="color:red"> ${answer}</span>`;
        score = score - 2;
        document.getElementById("welcome").innerText = `Hello ${player}, your current score is ${score}`;
        console.log("INCORRECT", score);
        if (i !== 3) {
        stopGame = prompt("Want to continue?").toLowerCase();
        if (stopGame === 'n') {
            break;
        }
    }
}
}
// }
alert(`FINAL SCORE: ${score}`);

document.querySelector(".score").innerHTML = `${player.toUpperCase()}, YOUR FINAL SCORE: ${score}`;

if (score < 0) {
    // alert("congrats");
    document.querySelector(".score").style.backgroundColor = "red";
} else {
    document.querySelector(".score").style.backgroundColor = "green";
}