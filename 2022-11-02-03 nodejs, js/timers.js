const inpSleep = document.querySelector('.sleep input');
const outSleep = document.querySelector('.sleep .out');
const btnStopSleep = document.querySelector('.sleep button');
const inpRepeat = document.querySelector('.repeat input');
const outRepeat = document.querySelector('.repeat .out');
const btnStopRepeat = document.querySelector('.repeat button');
let sleepTime = +inpSleep.value;
let repeatTime = +inpRepeat.value;
let intervalTime = 400;
let cnt = 0;

const timer1 = () => {
    setTimeout(() => {
        outSleep.innerText = `Slept well for ${sleepTime} seconds`;
    }, sleepTime * 1000);
};

const timer2 = setInterval(() => {
    cnt++;
    outRepeat.innerText += ` ${cnt}` ;
    if (cnt >= repeatTime) { clearInterval (timer2)}
}, intervalTime);

timer1();
// 
console.log('In the code I am located after setTimeout');

//* setTimeout() is ASYNCHRONOUS - it means while it sleeps,
//* other JS commands are fulfilled

inpSleep.addEventListener('input', () => {
    outSleep.innerText = ``;
    sleepTime = +inpSleep.value;
    timer1();
});

btnStopSleep.addEventListener('click', () => {
    clearTimeout(timer1);
});
btnStopRepeat.addEventListener('click', () => {
    clearInterval(timer2);
});

inpRepeat.addEventListener('change', () => {
    outRepeat.innerText = ``;
    repeatTime = +inpRepeat.value;
});