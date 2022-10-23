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


let min, min2;
let max, max2;
let guess, guess2;
let numberGenerated = 0;
let numberGenerated2 = 0;
let numberGenerated3 = 0;

let randomNumber, randomNumber2, randomNumber3;


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
    mode1Play.innerText = "Guess again"
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
            break;

        default:
            break;
    }

});

mode1Reset.addEventListener('click', reset1);

function reset1() {
    mode1Min.disabled = false;
    mode1Max.disabled = false;
    numberGenerated = 0;
    mode1Min.value = 0;
    mode1Max.value = 0;
    mode1Guess.value = 0;
    mode1Output.innerText = `Game reset, waiting for input`;
    mode1Play.innerText = "Mode 1 PLAY"
}

//* MODE 2
mode2Lower.disabled = true;
mode2Higher.disabled = true;
mode2Correct.disabled = true;


mode2Min.addEventListener(`input`, function () {
    mode2Output.innerHTML = `The range is ${+mode2Min.value} - ${+mode2Max.value}`;
    mode2Guess.setAttribute("min", +mode2Min.value);

});
mode2Max.addEventListener(`input`, function () {
    mode2Output.innerHTML = `The range is ${+mode2Min.value} - ${+mode2Max.value}`;
    mode2Guess.setAttribute("max", +mode2Max.value);

});

mode2Play.addEventListener(`click`, function () {
    min = +mode2Min.value;
    max = +mode2Max.value;
    guess = +mode2Guess.value;
    if (numberGenerated2 === 0) {
        randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
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
    max = randomNumber2;
    randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    mode2Output.innerText = `Computer picked a lower number, which is ${randomNumber2}, is it correct?`;

};
const mode2HigherButton = () => {
    min = randomNumber2;
    randomNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    mode2Output.innerText = `Computer picked a higher number, which is  ${randomNumber2}, is it correct?`;

};

mode2Lower.addEventListener('click', mode2LowerButton);
mode2Higher.addEventListener('click', mode2HigherButton);
mode2Correct.addEventListener('click', () => {
    mode2Output.innerText = (`Computer guessed your number!`);
});

function reset2() {
    mode2Min.disabled = false;
    mode2Guess.disabled = false;
    mode2Max.disabled = false;
    numberGenerated2 = 0;
    mode2Min.value = 0;
    mode2Max.value = 0;
    mode2Guess.value = 0;
    randomNumber2 = 0;
    mode2Play.disabled = false;
    mode2Lower.disabled = true;
    mode2Higher.disabled = true;
    mode2Correct.disabled = true;

    max = 0;
    min = 0;
    mode2Output.innerText = `Game reset, waiting for input`;
}

mode2Reset.addEventListener('click', reset2);