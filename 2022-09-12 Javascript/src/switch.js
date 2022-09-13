console.log(`switch.js loaded`);

// Ask user which profession he has

// If the profession is "chef",
// we say that he prepares delicios soup
// If the profession is "driver",
// we say that he drives a bus
// Otherwise we say that we don't know this profession

var profession = prompt("What is your profession?");
profession = profession.toLowerCase();
var response;
switch (profession) {
    case 'musician':
        response = 'You make great music';
        // console.log("sdasd");
        break;
    case 'marketer':
        response = 'You create awesome ads';
        break;
    case 'driver':
        response = `You have a driver's license`;
        break;
    case 'cook':
    case 'chef':
        response = 'You make tasty dishes';
        break;
    case 'programmer':
    case 'software engineer':
        response = 'You use stackoverflow a lot';
        break;
    default:
        response = `I can't comment on your profession of a ${profession}`
}
console.log(response);


var planetEng = prompt(`What planet were you born on?`);
planetEng = planetEng.toLocaleLowerCase();
var planetRus;
switch (planetEng) {
    case "mercury":
        planetRus = "Меркурий"
        break;
    case "venus":
        planetRus = "Венера"
        break;
    case "earth":
        planetRus = "Земля"
        break;
    case "mars":
        planetRus = "Марс"
        break;
    case "jupiter":
        planetRus = "Юпитер"
        break;
    case "saturn":
        planetRus = "Сатурн"
        break;
    case "uranus":
        planetRus = "Уран"
        break;
    case "neptune":
        planetRus = "Нептун"
        break;

    default:
        console.log(`Unknown planet`)
        break;
}
if (planetRus === "Меркурий" || planetRus === "Венера" || planetRus === "Земля" || planetRus === "Марс" || planetRus === "Юпитер" || planetRus === "Сатурн" || planetRus === "Уран" || planetRus === "Нептун") {
    console.log(`Вы с планеты ${planetRus}`);
} else { }



//* ASSIGNING AGE GROUP BASED ON AGE
var age = 34;
var firstName = 'Mary';
var result;
if (age < 2) {
    result = 'baby'
} else if (age >= 2 && age < 11) {
    result = 'child'
} else if (age >= 11 && age < 18) {
    result = 'teenager'
} else if (age >= 18 && age < 35) {
    result = 'young adult'
} else if (age >= 35 && age < 60) {
    result = 'adult'
} else if (age >= 60 && age < 75) {
    result = 'pre-retirement'
} else if (age >= 75) {
    result = 'elderly'
}
console.log(result);

//* SAME AS ABOVE BUT WITH SWITCH (TRUE) STATEMENT
var age = prompt("enter your age");
var caseResult;
switch (true) {
    case age < 2:
        caseResult = 'baby';
        break;
    case age >= 2 && age < 11:
        caseResult = 'child';
        break;
    case age >= 11 && age < 18:
        caseResult = 'teenager';
        break;
    case age >= 18 && age < 35:
        caseResult = 'young adult';
        break;
    case age >= 35 && age < 60:
        caseResult = 'adult';
        break;
    case age >= 60 && age < 75:
        caseResult = 'pre-retirement';
        break;
    case age >= 75:
        caseResult = 'elderly';
        break;
    default:
        console.log("WRONG INPUT");
}
console.log(`Your age group is ${caseResult}`);

//* CONVERTING POINTS TO GRADES
var numberOfPoints = +prompt("How many points did you get?");
var pointsInText;
switch (true) {
    case 100 >= numberOfPoints && numberOfPoints > 90:
        pointsInText = "A"
        break;
    case 90 >= numberOfPoints && numberOfPoints > 80:
        pointsInText = "B"
        break;
    case 80 >= numberOfPoints && numberOfPoints > 70:
        pointsInText = "C"
        break;

    default:
        pointsInText = "F"
        break;
}
console.log(`Your grade is ${pointsInText}`);

// if (profession === "chef" || profession === "cook") {

//     console.log('You prepare very delicios soup')

// } else if (profession === "driver" || profession === "racer")
//         {

//     console.log("You drive mercedes")

// } else {

//     console.log("We don't know what this profession is or you drive some unknown brand of cars")

// }