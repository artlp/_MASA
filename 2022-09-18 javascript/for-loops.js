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

function avg(a, b) {
    console.log((a + b) / 2);
}
for (var o = 1; o < 6; o = o + 1) {
    var num1 = +prompt("enter num1");
    var num2 = +prompt("enter num2")

    console.log(avg(num1, num2));
} 