
const gameMode1 = document.querySelector('#gamemode1');
const gameMode2 = document.querySelector('#gamemode2');
const gameMode3 = document.querySelector('#gamemode3');
const gameMode4 = document.querySelector('#gamemode4');
const mode1Min = document.querySelector('#mode1_min');
const mode1Max = document.querySelector('#mode1_max');
const mode1Guess = document.querySelector('#mode1_guess');
const mode1Play = document.querySelector('#mode1_play');
const mode1Reset = document.querySelector('#mode1_reset');
const mode1Output = document.querySelector('#mode1_output');
const mode2Min = document.querySelector('#mode2_min');
const mode2Max = document.querySelector('#mode2_max');
const mode2Guess = document.querySelector('#mode2_guess');
const mode2Play = document.querySelector('#mode2_play');
const mode2Reset = document.querySelector('#mode2_reset');
const mode2Output = document.querySelector('#mode2_output');
const mode2Lower = document.querySelector('#mode2_lower');
const mode2Higher = document.querySelector('#mode2_higher');
const mode2Correct = document.querySelector('#mode2_correct');
const mode3Min = document.querySelector('#mode3_min');
const mode3Max = document.querySelector('#mode3_max');
const mode3Answer = document.querySelector('#mode3_guess');
const mode3Start = document.querySelector('#mode3_start');
const mode3Radios = document.querySelector('.radio_buttons');
const mode3Play = document.querySelector('#mode3_play');
const mode3Reset = document.querySelector('#mode3_reset');
const mode3Output = document.querySelector('#mode3_output');
const mode3Player = document.querySelectorAll('.mode3_players');
const mode3Game = document.querySelector('.mode3_game');
const mode3PlayerGuess = document.querySelector('#mode3_playerGuess');
const reloadButton = document.querySelector('.refresh');


let min, min2, min3;
let max, max2, max3;
let guess, guess2;
let numberGenerated = 0;
let numberGenerated2 = 0;
let numberGenerated3 = 0;
let randomNumber, randomNumber2, randomNumber3;

reloadButton.addEventListener(`click`, () => {
    location.reload();
    return false;
});


document.addEventListener("DOMContentLoaded", () => {
    reloadButton.classList.add("disabled");
    document.querySelector(".wrapper").classList.add("disabled");
    document.querySelectorAll("section").forEach(e => { e.classList.add("disabled"); });
});

// intro

gameMode1.addEventListener('click', event => {
    reloadButton.classList.remove("disabled");
    document.querySelector(".intro").classList.add("disabled");
    document.querySelectorAll("section")[0].classList.remove("disabled");
    document.querySelector(".wrapper").classList.remove("disabled");
}
);
gameMode2.addEventListener('click', event => {
    reloadButton.classList.remove("disabled");

    document.querySelector(".intro").classList.add("disabled");
    document.querySelectorAll("section")[1].classList.remove("disabled");
    document.querySelector(".wrapper").classList.remove("disabled");
}
);
gameMode3.addEventListener('click', event => {
    reloadButton.classList.remove("disabled");

    document.querySelector(".intro").classList.add("disabled");
    document.querySelectorAll("section")[2].classList.remove("disabled");
    document.querySelector(".wrapper").classList.remove("disabled");
}
);
gameMode4.addEventListener('click', event => {
    reloadButton.classList.remove("disabled");
    document.querySelector(".intro").classList.add("disabled");
    document.querySelectorAll("section").forEach(e => { e.classList.remove("disabled"); }); document.querySelector(".wrapper").classList.remove("disabled");
}
);

// * MODE 1
mode1Min.addEventListener(`input`, function () {
    mode1Output.innerHTML = `The range is ${+mode1Min.value} - ${+mode1Max.value}`;
    mode1Guess.setAttribute("min", +mode1Min.value);

});
mode1Max.addEventListener(`input`, function () {
    mode1Output.innerHTML = `The range is ${+mode1Min.value} - ${+mode1Max.value}`;
    mode1Guess.setAttribute("max", +mode1Max.value);

});


mode1Play.addEventListener(`click`, function () {
    min = +mode1Min.value;
    max = +mode1Max.value;
    guess = +mode1Guess.value;
    mode1Play.innerText = "Guess again";
    if (numberGenerated === 0) {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        numberGenerated = 1;
        mode1Min.disabled = true;
        mode1Max.disabled = true;
    }
    switch (true) {
        case (min >= max):
            mode1Output.innerText = `INVALID INPUT`;
            break;
        case guess < randomNumber:
            mode1Output.innerText = `Your guess is ${guess}, it's lower than computer's number`;
            mode1Guess.setAttribute("min", guess);
            break;
        case guess > randomNumber:
            mode1Output.innerText = `Your guess is ${guess}, it's higher than computer's number`;
            mode1Guess.setAttribute("max", guess);
            break;
        case guess === randomNumber:
            mode1Output.innerText = `Your guess is ${guess}, you guessed the computer's number`;
            mode1Output.classList.add(`correct`);
            mode1Play.disabled = true;
            break;

        default:
            break;
    }

});

mode1Reset.addEventListener('click', reset1);

function reset1() {
    mode1Play.disabled = false;
    mode1Min.disabled = false;
    mode1Max.disabled = false;
    numberGenerated = 0;
    mode1Min.value = 1;
    mode1Max.value = 1;
    mode1Guess.value = 1;
    mode1Output.innerText = `Game reset, waiting for input`;
    mode1Output.classList.remove(`correct`);
    mode1Play.innerText = "Mode 1 PLAY";
}

//* MODE 2
mode2Lower.disabled = true;
mode2Higher.disabled = true;
mode2Correct.disabled = true;


mode2Min.addEventListener(`input`, () => {
    mode2Output.innerHTML = `The range is ${+mode2Min.value} - ${+mode2Max.value}`;
    mode2Guess.setAttribute("min", +mode2Min.value);

});
mode2Max.addEventListener(`input`, () => {
    mode2Output.innerHTML = `The range is ${+mode2Min.value} - ${+mode2Max.value}`;
    mode2Guess.setAttribute("max", +mode2Max.value);

});

mode2Play.addEventListener(`click`, () => {
    min2 = +mode2Min.value;
    max2 = +mode2Max.value;
    guess2 = +mode2Guess.value;
    if ((guess2 > max2) || (guess2 < min2)) {
        console.log("SDASDA");
        mode2Output.innerText = `NUMBER IS OUT OF RANGE!`; // TODO
        // reset2();
    }
    if (numberGenerated2 === 0) {
        randomNumber2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
        numberGenerated2 = 1;
        mode2Min.disabled = true;
        mode2Guess.disabled = true;
        mode2Max.disabled = true;
    }
    mode2Output.innerText = `Computer's guess is ${randomNumber2}, is it correct?`;
    mode2Lower.disabled = false;
    mode2Higher.disabled = false;
    mode2Correct.disabled = false;
    mode2Play.disabled = true;

});

const mode2LowerButton = () => {
    max2 = randomNumber2 - 1;
    randomNumber2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    mode2Output.innerText = `Computer picked a lower number, which is ${randomNumber2}, is it correct?`;

};
const mode2HigherButton = () => {
    min2 = randomNumber2 + 1;
    randomNumber2 = Math.floor(Math.random() * (max2 - min2 + 1)) + min2;
    mode2Output.innerText = `Computer picked a higher number, which is  ${randomNumber2}, is it correct?`;

};

mode2Lower.addEventListener('click', mode2LowerButton);
mode2Higher.addEventListener('click', mode2HigherButton);
mode2Correct.addEventListener('click', () => {
    mode2Output.innerText = (`Computer guessed your number!`);
    mode2Output.classList.add(`correct`);
});

function reset2() {
    mode2Min.disabled = false;
    mode2Guess.disabled = false;
    mode2Max.disabled = false;
    numberGenerated2 = 0;
    mode2Min.value = 1;
    mode2Max.value = 1;
    mode2Guess.value = 1;
    randomNumber2 = 0;
    mode2Play.disabled = false;
    mode2Lower.disabled = true;
    mode2Higher.disabled = true;
    mode2Correct.disabled = true;
    mode2Output.classList.remove(`correct`);
    max2 = 0;
    min2 = 0;
    mode2Output.innerText = `Game reset, waiting for input`;
}

mode2Reset.addEventListener('click', reset2);

//* MODE 3
mode3Answer.disabled = true;

mode3Min.addEventListener(`input`, () => {
    mode3Output.innerHTML = `The range is ${+mode3Min.value} - ${+mode3Max.value}`;
    mode3Answer.setAttribute("min", +mode3Min.value);

});
mode3Max.addEventListener(`input`, () => {
    mode3Output.innerHTML = `The range is ${+mode3Min.value} - ${+mode3Max.value}`;
    mode3Answer.setAttribute("max", +mode3Max.value);

});
let player;
mode3Player.forEach(e => {
    e.addEventListener("change", function () {
        mode3Start.innerHTML = `${e.value}, enter your number`;
        mode3Answer.disabled = false;
        return player = e.value;
    });
});

let opponent;
let playerGuess;
let playerAnswer;


mode3Play.addEventListener(`click`, () => {
    opponent = player === "Player 1" ? "Player 2" : "Player 1";
    min3 = +mode3Min.value;
    max3 = +mode3Max.value;
    playerGuess = +mode3PlayerGuess.value;
    playerAnswer = +mode3Answer.value;
    mode3Output.innerHTML += `. ${opponent}, enter your guess`;
    mode3Answer.disabled = false;
    mode3Min.disabled = true;
    mode3Max.disabled = true;
    mode3Answer.value = null;
    mode3PlayerGuess.setAttribute("min", min3);
    mode3PlayerGuess.setAttribute("max", max3);
    mode3Game.classList.remove("hidden");
    mode3Answer.style.color = "white";
    mode3Start.innerHTML = `Number is stored and hidden`;
    mode3Answer.disabled = true;
    mode3Play.disabled = true;
    mode3Radios.disabled = true;
    return playerAnswer;
});

let countNumber = 0;
function mode3Check() { // TODO
    playerGuess = +mode3PlayerGuess.value;
    switch (true) {
        case (min3 >= max3):
            mode3Output.innerText = `INVALID INPUT`;
            break;
        case playerGuess < playerAnswer:
            countNumber++;
            mode3Output.innerText = `Your guess is ${playerGuess}, it's lower than ${player}'s number. It was attempt №${countNumber}.`;
            mode3PlayerGuess.setAttribute("min", playerGuess);
            break;
        case playerGuess > playerAnswer:
            countNumber++;
            mode3Output.innerText = `Your guess is ${playerGuess}, it's higher than ${player}'s number. It was attempt №${countNumber}.`;
            mode3PlayerGuess.setAttribute("max", playerGuess);
            break;
        case playerGuess === playerAnswer:
            countNumber++;
            mode3Output.innerText = `Your guess is ${playerGuess}, you guessed the ${player}'s number. It took you ${countNumber} tries.`;
            mode3Output.classList.add(`correct`);
            countNumber--;
            break;

        default:
            break;
    }
}

document.querySelector("#mode3_check").addEventListener('click', mode3Check);

function reset3() {
    countNumber = 0;
    mode3Min.disabled = false;
    mode3Answer.disabled = false;
    mode3Max.disabled = false;
    numberGenerated3 = 0;
    mode3Min.value = 1;
    mode3Max.value = 1;
    mode3Answer.disabled = true;
    randomNumber3 = 0;
    mode3Play.disabled = false;
    mode3Output.classList.remove(`correct`);
    mode3Game.classList.add("hidden");
    mode3Output.classList.remove(`correct`);
    max3 = 0;
    min3 = 0;
    mode3Output.innerText = `Game reset, waiting for input`;
    mode3Start.innerHTML = `Select the player`;
    mode3Answer.value = null;
    mode3PlayerGuess.value = null;
    mode3Answer.style.color = "";
    mode3Radios.disabled = false;
    document.querySelectorAll("input[type=radio]")[0].checked = false;
    document.querySelectorAll("input[type=radio]")[1].checked = false;
}

mode3Reset.addEventListener('click', reset3);
