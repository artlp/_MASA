let stopGame;
let continueGame = true;
let validAnswer;
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
const possibleAnswers = ['a', 'b', 'c', 'd'];
let score = 0;

let player = prompt("What is your name?");
document.getElementById("welcome").innerText = `Hello ${player}, your current score is ${score}`;


for (i = 0; i < userAnswers.length; i++) {
    let answer;
    if (i > 0){
        if (!askContinue2()) break;
    }
        while (possibleAnswers.indexOf(answer) === -1) {
        answer = prompt(`QUESTION NUMBER ${[i + 1]} - ${userAnswers[i].toLowerCase()}`);
        }

    if (rightAnswers[i] === answer) {
        score++;
        document.getElementById("welcome").innerText = `Hello ${player}, your current score is ${score}`;
        console.log("CORRECT", score);
        document.querySelectorAll(".answer")[i].innerHTML = `<span style="color:green"> ${answer}</span>`;
        if ((i !== 3) && (!askContinue())) {
            break;
        }
    } else {

        document.querySelectorAll(".answer")[i].innerHTML = `<span style="color:red"> ${answer}</span>`;
        score = score - 2;
        document.getElementById("welcome").innerText = `Hello ${player}, your current score is ${score}`;
        console.log("INCORRECT", score);
        if ((i !== 3) && (!askContinue())) {
            break;
        }
    }
}

alert(`FINAL SCORE: ${score}`);

document.querySelector(".score").innerHTML = `${player.toUpperCase()}, YOUR FINAL SCORE: ${score}`;

if (score < 0) {
    document.querySelector(".score").style.backgroundColor = "red";
} else {
    document.querySelector(".score").style.backgroundColor = "green";
}


function askContinue() {
    let askUser;
    while ((askUser !== `y`) && (askUser !== `n`)) {
        askUser = prompt("Do you want to continue? y/n").toLowerCase();
    }
    if (askUser === 'y') {
        continueGame = true;
    } else if (askUser === 'n') {
        continueGame = false;
    }
    return continueGame;
}

function askContinue2() {
    let askUser;
    while ((askUser !== `y`) && (askUser !== `n`)) {
        askUser = prompt("Do you want another question? y/n").toLowerCase();
    }
    if (askUser === 'y') {
        continueGame = true;
    } else if (askUser === 'n') {
        continueGame = false;
    }
    return continueGame;
}

function checkAnswer(answer) {
    if ((answer !== 'a') && (answer !== 'b') && (answer !== 'c') && (answer !== 'd')) {
        return true;
    } else {
        return false;
    }
}