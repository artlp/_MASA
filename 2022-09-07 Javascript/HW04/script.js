console.log("LAUNCHING SCRIPT FROM TASK 2");
var firstName = "Artur";
var lastName = "Lipskii";
var birthYear = "1990";
var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;
console.log('Hello, ' + firstName + ' ' + lastName + ' , you are ' + age + ' years old');
if (firstName + lastName !== "JohnSmith") {
    console.log("You've got an unusual name");
};
if (age >= 18) {
    console.log('you can drink alcohol');
} else {
    console.log("don't cry, baby");
}
console.log('age is a ' + typeof(age));
console.log('My favorite meals are: \nPizza\nCarbonara\nCaesar Salad');