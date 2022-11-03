// function fibonacci(n) {
//     const arr = [0, 1];
//     for(let i=1; i<=n; i++) {
//         arr.push(arr[i] + arr[i-1]);
//     }
//     return arr[n];
// }

// console.log(fibonacci(6))

// function fibonacci(n) {
//     let a = 1;
//     let b = 1;
//     for(let i = 3; i <=n; i++) {
//         // let c = a + b;
//         // a = b;
//         // b = c;
//         [a, b] = [b, a + b];
//     }
//     return b;
// }

// console.log(fibonacci(5));

function fibonacci(n) {
    return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(30));