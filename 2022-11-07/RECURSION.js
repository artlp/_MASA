function f1() {
    console.log("hello");
    f2();
    console.log("I am f1");
}

function f2() {
    console.log("I am f2");
}

f1();


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return factorial(n - 1) * n;
}
console.log(factorial(4));
console.log(factorial(11));

function mission(n) { //write numbers from N to 1
    while (n > 0) {
        console.log(n);
        return mission(--n);
    }
}

mission(16);
console.log("~~~~~~~~~~~~SECOND VARIANT~~~~~~~~~~~~");

function mission2(n) {
    console.log(n);
    if (n === 1) {
        return;
    }
    mission2(n-1);
    console.log(n); //!magic
}
mission2(5);