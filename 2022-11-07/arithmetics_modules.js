/* const counter = function(arr) {
    return `There are ${arr.length} elements in this array`;
};

const adder = function(a,b) {
    return `The sum of ${a} and ${b} is ${a+b}`;
}

const pi = 3.142;

module.exports.arrLength = counter;
module.exports.adder = adder;
module.exports.pi = pi; */

module.exports.counter = function(arr) {
    return `There are ${arr.length} elements in this array`;
};
module.exports.adder = function(a,b) {
    return `The sum of ${a} and ${b} is ${a+b}`;
}
module.exports.pi = 3.142;
module.exports.circleCalc = function(n1,n2,n3) {
    return n1*n2*n3;
}


//ANOTHER OPTION OF THE SAME