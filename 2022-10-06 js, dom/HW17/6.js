// Level 6.1 Ternary operator inside ternary operator. 
// Complication of Level 5.9.

// Write function checkGreat() that gets firstName.
// If the name starts with 'M' or 'G' - say 'Great!'
// If the name starts with 'T' or 'R' - say 'Totally Great!'
// If not, say with which letter it starts.

console.log(`6.1`);
function checkGreat(name) {
    name = name.toLowerCase();
    name.charAt(0) === "m" || name.charAt(0) === "g" ? console.log("Great") :
        name.charAt(0) === "t" || name.charAt(0) === "r" ? console.log("Totally great") :
            console.log(`Entered name starts with ${name.charAt(0).toUpperCase()}`);

}

checkGreat('Roni'); // 'Totally Great!'
checkGreat('Tal'); // 'Totally Great!'
checkGreat('Neomi'); // 'N'
checkGreat('Miri'); // 'Great!'
checkGreat('Yila'); // 'Great!'

// Level 6.2 Ternary operator inside ternary operator.
// Complication of Level 5.10.
// Declare variable "color" at the beginning of the program.
// Write function colorDecision() that gets a letter.
// Check if the letter equal 'b', return 'blue', 
// if the letter equals "g", return "green",
// otherwise return 'red'.
// Use the function to assign color to the variable.

console.log(`6.2`);
function colorDecision(letter) {
    letter === `b` ? result = "blue" :
        letter === `g` ? result = "green" : result = "red";
    return result;
}
color = colorDecision('b'); // "color" equals "blue"
color = colorDecision('d'); // "color" equals "red"
color = colorDecision('g'); // "color" equals "green"
console.log(colorDecision('g'));


console.log(`6.3`);
document.querySelector("#s63input").addEventListener(`input`, function () {
    let input = +document.querySelector(`#s63input`).value;
    let result63 = document.querySelector(`#s63result`);
    let sum = 0;
    for (i = 1; i <= input; i++) {
        sum += i;
        result63.innerHTML = sum;
    }
});

console.log(`6.4`);
const result64 = document.querySelector(`#s64result`);
let calcResult = 0;
document.querySelector("#s64input").addEventListener(`input`, () => {

    let input = +document.querySelector(`#s64input`).value;

    if (input < 0) {
        calcResult = -1;
        for (i = -1; i >= input; i--) {
            colorize(calcResult, i);
        }
    } else if (input > 0) {
        calcResult = 1;
        for (i = 1; i <= input; i++) {
            colorize(calcResult, i);
        }
    }
});

function colorize(num, i) {
    calcResult *= i;
    result64.innerHTML = calcResult;
    calcResult < 0 ? result64.classList.replace("green", "red") : result64.classList.replace("red", "green");
}

console.log(`6.5, 6.6`);


document.querySelector("#s65input").addEventListener(`input`, function () {
    const input = +document.querySelector(`#s65input`).value;
    const result65 = document.querySelector(`#s65result`);
    let array = [];
    const comparison = +document.querySelector(`#s66input`).value;
    for (i = 1; i <= input; i++) {
        array.push(i);
        result65.innerHTML = array;
        }
        if (input < comparison) {
            result65.style.backgroundColor = "yellow";
        } else {
            result65.style.backgroundColor = "purple";
}});