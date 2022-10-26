//let max = 100;
// 20 is for now - just to make faster trials
let max = 20;
let sum;

const btnStart = document.querySelector('#start');
const btnSurrender = document.querySelector('#surrender');
const announce = document.querySelector('#announce');
const num = document.querySelector('#num');
const log = document.querySelector('#log');

// MISSION: when button "Start" is clicked, there should be 
// an annoucement "You're first" or "I'm first"

const start = () => {

    sum = 0;
    const choosePlayer = ["You're first", "I'm first"];
    //let turn = Math.round(Math.random());
    let turn = getRand(0,1);
    announce.innerText = choosePlayer[turn] ;
    if ( turn === 1 ) computerTurn();
}

const getRand = (min,max) => {
    return Math.floor(Math.random() * (max+1-min)) + min;
}

const computerTurn = () => {
    // MISSION:
    // 1. randomly choose number from 1 to 9
    // 2. add it to the sum, for example, the sum now is 14
    // 3. show in the log smth like:
    //    machine: has chosen 9, the sum now is 14
    // 4. Call this function from the function "start"
    //    when the 1st turn is computer's

    let compNum = getRand(1,9);
    // TBD (TO BE DONE) - if the sum will be greater than 100,
    // fix compNum to make the sum be 100 exactly
    sum += compNum;
    log.innerText += `machine: has chosen ${compNum}, the sum now is ${sum}\n`;
    // TBD check if computer has WON - you need function for this
}

// TBD const playerTurn=()=> {} 

btnStart.addEventListener('click',start);



