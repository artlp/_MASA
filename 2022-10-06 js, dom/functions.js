const driverMinAge = 17;
function canHaveDriverLicense(age) {
    console.log(`age ${age} and mindriverage ${driverMinAge}, can drive: `);
    return age >= driverMinAge;

}
console.log(canHaveDriverLicense(20)); //* result - true
console.log(canHaveDriverLicense(10)); //* result - false


console.log(`// MISSION: 
// Write function answerIsValid() - it gets a string (the answer of the user).
//  It is valid only when the answer is N/n/Y/y
// Return TRUE if the answer is valid, otherwise FALSE.`);

function answerIsValid(string) {
return string === "N" || string === "n" || string === "Y" || string === "y";
}
console.log(answerIsValid(prompt("enter something"))); 