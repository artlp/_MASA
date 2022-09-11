var userProfession = prompt("What's your profession?");
var carBrand = prompt("Do you drive a Mercedes or a Ferrari?")
if (userProfession === "chef" || userProfession === "cook") {
    console.log("You make delicious soups");
} else if ((userProfession === "driver" || userProfession === "racer")
    && (carBrand === "Mercedes" || carBrand === "Ferrari")) {
    console.log("You drive a " + carBrand);
} else {
    console.log("I don't know your profession or you drive some weird car");
}

var age = 80;
var sleptWell = "no";
var takeMedicine = "yes";
if (sleptWell === "no" || age >= 80 && takeMedicine === "yes") {
    console.log("don't drive");
}

var num = 5;
if (num > 15 && num < 100) {
    console.log("FALSE");
}

var favoriteColor = "red";
if (favoriteColor === "red" || favoriteColor === "yellow" || favoriteColor === "orange") {
    console.log("You prefer warm colours");
}