//* in console, show the numbers from 1 to 10
for (var i = 1; i < 11; i = i + 1) {
    console.log(i);
    // i++ //! alternative

}

for (var x = 27; x >= 1; x = x - 1) {
    if (x % 3 === 0) {
        console.log(`Divided by 3: ${x}`);
    } else {
        // console.log(x, x);
    }
}

// function avg(a, b) {
//     console.log((a + b) / 2);
// }
// for (var o = 1; o < 3; o = o + 1) {
//     var num1 = +prompt("enter num1");
//     var num2 = +prompt("enter num2")

//     console.log(avg(num1, num2));
// }

var numL = 44;
numL++; //! same as num = num + 1
numL--; //! same as num = num - 1
numL += 50; //! same as num = num +50
numL *= 50; //! same as num = num *50
numL /= 75 //! same as num = num / 75
console.log(numL);

var word1 = 'synchrophasatron';
for (var i = 0; i <= word1.length; i++) { //* show each letter on new line
    console.log(word1[i]);
}
console.log(`//* MISSION: go over word1 from the end to the beginning,
//* show only the letters on the even places. Show each letter 
//*  twice (on the same line)  and in UPPER CASE`);
console.log(`option 1`);
for (var x = word1.length - 1; x >= 0; x--) {

    if (x % 2 === 1) {
        console.log(word1[x].toUpperCase(), word1[x].toUpperCase());
    } else { }
}
console.log('option 2');
//! OPTION 2
var start;
if ((word1.length - 1) % 2 === 0) {
    start = word1.length - 1;
} else {
    start = word1.length - 2;
}
for (var i = start; i >= 0; i -= 2) {
    console.log(word1[i].toUpperCase(), word1[i].toUpperCase());
}

console.log(`TAKE A WORD AND WRITE IT LIKE THIS: L*I*O*N`);
var word2 = 'encyclopedia';
var str = '';
for (var i = 0; i <= word2.length - 1; i++) {
    // str = str + word2[i] + '*';
    str += word2[i] + '*';
    if ((i + 1) % 4 === 0) {
        str += "\n";
    }
}
console.log(str);