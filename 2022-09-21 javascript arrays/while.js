(function (logger) {
    console.old = console.log;
    console.log = function () {
        var output = "", arg, i;

        for (i = 0; i < arguments.length; i++) {
            arg = arguments[i];
            output += "<span class=\"log-" + (typeof arg) + "\">";

            if (
                typeof arg === "object" &&
                typeof JSON === "object" &&
                typeof JSON.stringify === "function"
            ) {
                output += JSON.stringify(arg);   
            } else {
                output += arg;   
            }

            output += "</span>&nbsp;";
        }

        logger.innerHTML += output + "<br>";
        console.old.apply(undefined, arguments);
    };
})(document.getElementById("logger"));


let answer = prompt("Marry me?");
while (answer.toLowerCase() !== "yes") {
    answer = prompt('Please marry me');
}
alert(`I love you too`);
// 
let num = '578445';
if (isNaN(num)) {
    console.log('this is not a number');
} else {
    console.log('this is a number');
}

console.log(`/* MISSION: ask a person for their favorite number 
Stop when you get a number */`);
let answerFav = prompt("What is your favorite number?");
while ((!answerFav && answerFav !== "0") && (isNaN(answerFav)))  {
    answerFav = prompt("This is not a number. What is your favorite number?");
}
alert(`Nice, I love ${answerFav} too`);


var i = 0;
while (i < 15) {
    i++;
    console.log(`i is currently ${i}`);
}
console.log("I ENDED");


let strWithSpaces = '                I really like    pizza            '
console.log(strWithSpaces);
console.log(`${strWithSpaces.trim()}`);


console.log(`

// Write a function that goes over a given array, shows each member
//  and stops at 0,`);
const array1 = ['pizza', 'falafel', 45, 42, 0, 124, 'lasagna'];
const array2 = ['pizza', 'falafel', 45, 42, 124, 'lasagna'];
const array3 = [];
let x = 0;
function arrayCheck(o) {
while ((x < o.length) && (o[x] !== 0)) {
    console.log(`${o[x]}`);
    x++;
} console.log(`task completed`);
}
arrayCheck(array1);
arrayCheck(array2);
arrayCheck(array3);