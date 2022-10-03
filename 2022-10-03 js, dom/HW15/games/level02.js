// 1. MISSION: go with "for" loop over the array and show only the second
//  letter of each food on the next line
var food = ['pizza', 'bread', 'butter', 'banana', 'humus', 'falafel'];
for (i = 0; i < food.length; i++) {
    console.log(`${food[i][1]}`);
}

//* 2.  MISSION: create pairs of food and drink
///   with the same index:
/// pizza water
///// bread milk
//// butter juice
var drink = ['water', 'milk', 'juice', 'beer', 'coffee', 'wine'];
for (i = 0; i < food.length; i++) {
    console.log(`${food[i]} ${drink[i]}`);
}



//* 3. MISSION: go over the array drink, exchange each drink
// by it's index
// after the loop show the array at the console

var drink2 = ['water', 'milk', 'juice', 'beer', 'coffee', 'wine'];
for (i = 0; i < drink2.length; i++) {
    // console.log(i);
    drink2[i] = i;
    // console.log(drink2[i]);
}
console.log(drink2);

// 4. Что празднуем?

//    Используйте SWITCH statement.
//    Программа получает месяц и число
//    и сообщает, на какие праздники
//    попала эта дата. 
//    "Tishrei", 1-22 - "Autumn Holidays"
//    "Kislev", 24-30 - "Chanuka"
//    "Tevet", 1-3 - "Chanuka"
//    "Shvat", 15 - "Tu biShvat"
//    "Adar", 13-16 - "Purim"
//    "Nisan", 14-21 - "Pesach"

let day = 15;
let month = "Adar";
switch (true) {
    case ((day >= 1) && (day <= 22)) && (month === "Tishrei"):
        console.log("Autumn Holidays");
        break;
    case ((day >= 24) && (day <= 30)) && (month === "Kislev"):
        console.log("Chanuka");
        break;
    case ((day >= 1) && (day <= 3)) && (month === "Tevet"):
        console.log("Chanuka");
        break;
    case (day === 15) && (month === "Shvat"):
        console.log("Tu biShvat");
        break;
    case ((day >= 13) && (day <= 16)) && (month === "Adar"):
        console.log("Purim");
        break;
    case ((day >= 14) && (day <= 21)) && (month === "Nisan"):
        console.log("Pesach");
        break;

    default:
        console.log("Not a holiday");
        break;
}


// 5. Use cycle 'FOR' to loop over the array and print the strings to the console.
// If you encounter something that not a string, exit the loop.

var John = ['John', 'Smith', 'developer', 'Ohio', 1997, 'John', 'Mary'];
for (i = 0; i < John.length; i++) {
    if (typeof (John[i]) === "string") {
        console.log(`${John[i]} is ${typeof (John[i])} - going on`);
    } else {

        console.log(`${John[i]} is ${typeof (John[i])} - quitting the loop`);
        break;
    }
}

// 6.    Use cycle 'FOR' to loop over the array and print the strings to the console.
//    If this is not a string, skip it and do not print.

for (i = 0; i < John.length; i++) {
    if (typeof (John[i]) === "string") {
        console.log(`${John[i]}`);
    } else {

    }
}

// 7.    Take the Array "todos", loop through it by "for" loop, and add "!" to each entry 

var todos = ['clean room', 'brush teeth', 'exercise', 'study javascript', 'eat healthy'];
for (i = 0; i < todos.length; i++) {
    todos[i] = todos[i] + "!";
}
console.log(todos);

// 8. Level 2.7 continued. Take the changed "todos", loop through it by "for" loop, imagine  
//    that each time first mission is executed, remove it from the array and print to the console what has left of the list
let todosLength = todos.length;
for (i = 0; i < todosLength; i++) {
    todos.shift();
    console.log(todos);
}


// 9.    Use cycle 'FOR' to loop over the array and find the sum of the elements of the array.

// Examples:
var arr1 = [375, -18, 6.4, 7.12, -0.08, 1, 128, 0, 567];

// Console: 1066.44

var arr2 = [-1.5, 4.6, -7.1, 4];

// Console: 0

var arr3 = [0, 0, 0, 0, 0, 0];

// Console: 0

var arr4 = [];

// Console: 0

var arr5 = [20,30];

function arraySum(array) {
    let sum = 0;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log(sum);
}

arraySum(arr1);
arraySum(arr2);
arraySum(arr3);
arraySum(arr4);
arraySum(arr5);

