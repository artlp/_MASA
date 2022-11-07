// import arithm from './arithmetics'; //* <- BETTER WAY
const arithm = require('./arithmetics_modules') //importing without file extensions for common types of files (like .js)


const names = ['David','Steve','Richard', 'Maria']
console.log(arithm.counter(names));

const radius = 5.6;
console.log(arithm.circleCalc(arithm.pi, radius, 2).toFixed(2));