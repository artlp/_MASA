/* 1. Train recursion

a) Fibonacci numbers, starting from the 3rd number 
   are created as sum of two previous numbers. 

   The beginning of Fibonacci sequence:

   1, 1, 2, 3, 5, 8, 13, 21, 34, 55 ...

   Create function that gets number n and shows 
   sequence of n Fibonacci numbers.

b) Use document.createElement, etc. and recursion 
   to create recursion-pic01.jpg */

console.log('====================================');
console.log('a');
console.log('====================================');

function recursion(n) {
    if (n < 2) {
        return n;
    }
    return recursion(n - 2) + recursion(n - 1);
}
console.log(recursion(6));

console.log('====================================');
console.log('b');
console.log('====================================');

const firstRectangle = document.querySelector('.outer-figure > .rectangle');
let currRect = firstRectangle;
const minWidth = 400;
let opacity = 1;
const createFigure = () => {
    const newFig = document.createElement('div');
    opacity = opacity*0.96;
    newFig.style.opacity = opacity;
    newFig.classList.add('figure');
    const newRect = document.createElement('div')
    const newRecur = document.createElement('div')
    newRecur.classList.add('recursion');
    newRect.classList.add('rectangle');
    currRect = newRect;
    newH1 = document.createElement('h1');
    newH1.innerText = 'RECURSION';
    newRecur.append(newH1);
    const newHere = document.createElement('div');
    newHere.classList.add('here-we-go');
    newHere.innerText = 'Here we go again';

    newFig.append(newRect);
    newFig.append(newRecur);
    newFig.append(newHere);

    return newFig;
}
// currRect.append(createFigure());


// let curdiv = firstRectangle;
function createDiv(n) {
    if (n === 0) {
        return;
    }
    const div = document.createElement('div');
    // curdiv = div;
    div.style.width = "90%";
    div.style.height = "90%";
    div.style.backgroundColor = "black";
    div.style.border = "2px solid red";
    // document.body.appendChild(div);
    // curdiv.appendChild(div);
    createDiv(n - 1);
}
createDiv(6);

const appendFig = () => {
    console.log(currRect.offsetWidth);
    if (currRect.offsetWidth <= minWidth) {
        return;
    }
    currRect.append(createFigure());
    appendFig();
}
appendFig();