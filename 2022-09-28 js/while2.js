let num1;
while (true) {
    num1 = prompt("Enter your favorite number");
    if (num1 && !isNaN(num1)) break;
}
console.log(`（￣︶￣）↗　 My favorite number is ${num1} too ❤️`);


let favColor;
while (true) {
    favColor = prompt("red, blue or purple?").toLowerCase();
    if ((favColor === `red`) || (favColor === `blue`) || (favColor === `purple`)) break;
}
if (favColor === 'red') {
    favColor = '🟥🟥🟥🟥';
} else if (favColor === 'blue') {
    favColor = '🟦🟦🟦🟦';
}
else if (favColor === 'purple') {
    favColor = '🟪🟪🟪🟪';
}
console.log(`You chose ${favColor}`);


const arr4 = ['RED','GREEN','BLUE','YELLOW','Ashdod','WHITE','Rechovot','Nes-Ziona']

for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] === 'RED' || arr4[i] === 'BLUE' || arr4[i] === 'YELLOW' || arr4[i] === 'WHITE' || arr4[i] === 'GREEN') {
        continue; //! 
    }
    console.log(arr4[i]);
}