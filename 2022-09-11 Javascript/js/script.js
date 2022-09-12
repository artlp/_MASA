// ! variable names are done in CAMEL CASING - ALL WORDS EXCEPT THE FIRST ONE START WITH AN UPPER CASE LETTER
// var favoriteColor = prompt("What's your favorite color?");

// ! Function prompt() returns a value that the user enters 
// console.log('Your favorite color is ' + favoriteColor);
//* sadadaksdl
// ! WE ARE CREATING AN OBJECT OF CLASS "DATE", WHICH HAS CONSTRUCTIOR DATE()
// ! OPERATOR 'NEW' TOGETHER WITH CONSTRUCTOR CREATES NEW OBJECT WITH CLASS DATE()
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var minDrivingAge = 17;
var birthYear = prompt("What year were you born?");

var age = currentYear - birthYear;
console.log("Your age is " + age);
if (age < minDrivingAge) {
    console.log("You can't drive!");
}
else if (age > 95) {
    console.log("You can't drive due to age restrictions.");
} else {
    var hadDrink = prompt('Have you had any alcohol drinks?');
    var hadMedicine = prompt('Have you had any strong medical drugs?');
    var drivingLicense = prompt("Do you have a driver's license?");
    if (drivingLicense === "no") {
        console.log("You must get a license first");
    } else if (hadDrink === 'yes') {
        console.log('You should not drive under the influence');
    } else if (hadMedicine === 'yes') {
        console.log("You should not drive after taking strong meds");
    }

    else {
        console.log("You can drive!");
    }
}