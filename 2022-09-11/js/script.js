// ! variable names are done in CAMEL CASING - ALL WORDS EXCEPT THE FIRST ONE START WITH AN UPPER CASE LETTER
// var favoriteColor = prompt("What's your favorite color?");

// ! Function prompt() returns a value that the user enters 
// console.log('Your favorite color is ' + favoriteColor);

// ! WE ARE CREATING AN OBJECT OF CLASS "DATE", WHICH HAS CONSTRUCTIOR DATE()
// ! OPERATOR 'NEW' TOGETHER WITH CONSTRUCTOR CREATES NEW OBJECT WITH CLASS DATE()
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var minDrivingAge = 17;
var birthYear = prompt("What year were you born?");
var age = currentYear - birthYear;
console.log("Your age is " + age);
if (age < minDrivingAge) {
    console.log("you can't drive yet");
} else {
    var drivingLicense = prompt("Do you have a driver's license?");
    if (drivingLicense === "yes") {
        console.log("You are allowed to drive");
    } else {
        console.log("You must get a license first");
    }
}