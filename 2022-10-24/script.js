// o | x | x 
// ----------
// o | x | o
// ----------
// x |   | o

const tickTacToe = [['o', 'x', 'x'],
['o', 'x', 'o'],
['x', '', 'o']];
// We want to draw the tick tack toe state of 
// the game

const out = document.querySelector('.game');

for (i = 0; i < tickTacToe.length; i++) {
    for (j = 0; j < tickTacToe[i].length; j++) {

        out.innerText += `\xa0${tickTacToe[i][j].padEnd(2, "\xa0")}`;
        if (j !== 2) {
            out.innerText += '|';
        }
    }
    out.innerText += '\n';
    if (i !== 2) {
        out.innerText += '-'.repeat(11) + `\n`;
    }

}


// 
const nums = [[1,2,5,6,107.1], [0,4,5], [2.3,4.5,0.1,345],[23,4,5,6,7]];
const nums2 = [[1,1,1,1,1], [3,0,2], [5,5],[1,1,1,1,1,1,1,1,1,1]];
//! MISSION - FIND SUM OF ALL NUMBERS
let sum = 0;

function sumOfAll(array) {
    sum=0;
array.forEach(e => {
    e.forEach(x => sum += x)       ;
    });
return sum;
}
console.log(`${sumOfAll(nums)}, ${sumOfAll(nums2)}`);

