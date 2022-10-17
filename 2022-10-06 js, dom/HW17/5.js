// Level 5.1 Ваша программа получает массив.
//     Используя цикл "for", пройдите по
//     всем элементам массива до предпоследнего
//     и замените каждый из них на следующий.
//     Последний элемент замените на строчку
//     'I did it!'

//    Пример:
//    var arr = [6.25, -0.36, 0, 1, -144]

//    Console:
//    Original array: [6.25, -0.36, 0, 1, -144]
//    The same array after the change: [-0.36, 0, 1, -144, 'I did it!']

//    Пример:
//    var arr = [true, false, false, false, true, true]

//    Console:
//    Original array: [true, false, false, false, true, true]
//    The same array after the change: [false, false, false, true, true, 'I did it!']

//    Пример:
//    var arr = ['lala','Great Scott!']

//    Console:
//    Original array: ['lala','Great Scott!']
//    The same array after the change: ['Great Scott!', 'I did it!'] 

//    Пример:
//    var arr = ['I am hungry']

//    Console:
//    Original array: ['I am hungry']
//    The same array after the change: ['I did it!'] 

//    Пример:
//    var arr = []

//    Console:
//    Original array: []
//    The same array after the change: [] 

console.log(`5.1`);
var arr = [6.25, -0.36, 0, 1, -144];
let arrLength = arr.length;
let newArray = [];
for (i = 0; i < arr.length - 1; i++) {
    newArray[i] = arr[i + 1];
    newArray[arrLength - 1] = "I did it!";
}
console.log(newArray);


// Level 5.2 Ваша программа получает массив.
//     Сделайте так, чтобы каждый элемент 
//     массива, кроме последнего, оказался
//     заменен на следующий.
//     Последний элемент замените на строчку
//     'I did it!' - в этой задаче результат
//     должен быть тот же, что и в предыдущей, 
//     но нельзя пользоваться циклом, а 
//     требуется использовать некоторые 
//     из методов массивов, кот. мы изучали 
//     (push(), pull(), shift(), unshift())

//    Пример:
//    var arr = [6.25, -0.36, 0, 1, -144]

//    Console:
//    Original array: [6.25, -0.36, 0, 1, -144]
//    The same array after the change: [-0.36, 0, 1, -144, 'I did it!']

//    Пример:
//    var arr = [true, false, false, false, true, true]

//    Console:
//    Original array: [true, false, false, false, true, true]
//    The same array after the change: [false, false, false, true, true, 'I did it!']

//    Пример:
//    var arr = ['lala','Great Scott!']

//    Console:
//    Original array: ['lala','Great Scott!']
//    The same array after the change: ['Great Scott!', 'I did it!'] 

//    Пример:
//    var arr = ['I am hungry']

//    Console:
//    Original array: ['I am hungry']
//    The same array after the change: ['I did it!'] 

//    Пример:
//    var arr = []

//    Console:
//    Original array: []
//    The same array after the change: []

console.log(`5.2`);
var arr = [6.25, -0.36, 0, 1, -144];
arr.shift();
arr.push("I did it!");
console.log(arr);

// Level 5.3 Ваша программа получает 
//    рациональное число и целое число.
//    Она возводит рациональное число
//    в степень целого числа, не пользуясь
//    функцией Math.pow() или оператором, 
//    а, используя if для разных случаев,
//    и цикл "for".

//    Пример:
//    var num = 2.5, pow = 3

//    Console:
//    15.625

//    Пример:
//    var num = 0, pow = 14

//    Console:
//    0

//    Пример:
//    var num = 1, pow = -23

//    Console:
//    1 

//    Пример:
//    var num = -1, pow = -133

//    Console:
//    -1 

//    Пример:
//    var num = 3, pow = -4

//    Console:
//    0.012345679012345678

//    Пример:
//    var num = -245.44, pow = 0

//    Console:
//    1

//    Пример:
//    var num = -2, pow = 12

//    Console:
//    4096


console.log(`5.3`);
function artur(num, pow) {
    let result = 1;
    if (num === 0) {
        result = 0;
    } else if (pow > 0) {
        for (i = 1; i <= pow; i++) {
            result = result * num;

        }
    } else if (pow < 0) {
        for (i = 1; i <= Math.abs(pow); i++) {
            result = result / num;

        }
    } console.log(result);
}
artur(3, -4);

// Level 5.4 Вычислите результат.
// Ваша программа получает несколько чисел. 
// Числа по очереди надо то прибавлять, то вычитать.
// Если их количество четное, надо начинать 
// со сложения, а если нечетное, то с вычитания.
// Напр: 4+3-6+9-8+3 или 5-8+1-10+7.

console.log(`5.4`);
let arrayNum = [10, 1, 3, 4, 6, 5];
let numberOfNumbers;
arrayNum.length % 2 === 0 ? numberOfNumbers = "even" : numberOfNumbers = "odd";
// console.log(numberOfNumbers);
let result = arrayNum[0];
// console.log(result);
for (i = 1; i < arrayNum.length; i++) {
    if (i % 2 !== 0 && numberOfNumbers === "even") {
        // console.log(`1`, result);
        result = result + arrayNum[i];
    } else if (i % 2 !== 0 && numberOfNumbers === "odd") {
        // console.log(`2`, result);
        result = result - arrayNum[i];
    } else if (i % 2 === 0 && numberOfNumbers === "even") {
        // console.log(`3`, result);
        result = result - arrayNum[i];
    } else if (i % 2 === 0 && numberOfNumbers === "odd") {
        // console.log(`4`, result);
        result = result + arrayNum[i];
    }
}
console.log(result);


// Level 5.5 Что празднуем? Усложненный вариант Level 3.1

//    Решите любым подходящим способом.
//    Задан массив месяцев:
//    var months = ["Tishrei","Cheshvan","Kislev","Tevet","Shvat","Adar","Nisan","Iyar","Sivan","Tammuz","Av","Elul"]
//    Программа несколько раз получает месяц и число
//    и сообщает, на какие праздники
//    попала эта дата, или, что речь идет о 
//    непраздничном дне. Программа останавливается,
//    когда вводится несуществующая дата (в месяце до 30 дней).
//    "Tishrei", 1-22 - "Autumn Holidays"
//    "Kislev", 24-30 - "Chanuka"
//    "Tevet", 1-3 - "Chanuka"
//    "Shvat", 15 - "Tu biShvat"
//    "Adar", 13-16 - "Purim"
//    "Nisan", 14-21 - "Pesach"
console.log(`5.5`);
const day = 14;
const month = "Adar";
let cancel = true;
do {
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
        case (day > 30):
            console.log("Error");
            break;

        default:
            console.log("Not a holiday");
            cancel = false;
            break;
    }

} while (false);

// Level 5.6. Use DO WHILE loop and go over the array and show it's elements till you encounter 'true' (don't show 'true') 
console.log(`5.6`);
var arr1 = [23, false, 'lala', 'haha', true, false, false, true];
var arr2 = [123, false, 'olala', 'haha', 'OMG'];
var arr3 = [true, 23, false, 'lala', 'haha', true, false, false, true];
function checkArrays(array) {
    for (i = 0; ((i < array.length) && (array[i] !== true)); i++) {
        console.log(array[i]);

    }
}
checkArrays(arr2);

// Level 5.7 Use while(true). Ask the user to say "Yes" or "No" 
// ('NO','no','YES','yes' are OK too). 
// If the user answers "Yes" or "No", say "Great answer!" and 
// get out of the loop. 
// After the loop say: "The loop has stopped"
console.log(`5.7`);
let answer;
while (true) {
    answer = prompt("Enter yes or no").toLowerCase();
    if ((answer === "yes") || (answer === 'no')) {
        break;
    }
} console.log(`Great answer`);
console.log("The loop has stopped");


// Level 5.8 Use while(true), break and continue.
// User enters integers one by one.
// We stop when there is no input (use parseInt to get it from prompt).
// If the number is even, we divide it by 2 and show.
// If the number is odd, we do nothing
console.log(`5.8`);
let userInput;
while (true) {
    userInput = parseInt(prompt("Enter a number"));
    if (!userInput) {
        console.log(typeof (userInput));
        break;
    } 
    else if (userInput % 2 === 0) {
        console.log(userInput / 2);
        continue;
    }
    else if (userInput % 2 !== 0) {
        console.log(`Your number is odd`);
        continue;
    }
    
}
// Level 5.9 Ternary operator. 

// Write function checkGreat() that gets firstName.
// If the name starts with 'M' or 'G' - say 'Great!'
// If not, say with which letter it starts.

console.log(`5.9`);
function checkGreat() {
    let userName = prompt(`enter a name`).toLowerCase();
    userName.charAt(0) === "m" || userName.charAt(0) === "g" ? console.log("great") : console.log(`Entered name starts with ${userName.charAt(0).toUpperCase()}`);
    
}
checkGreat('Miri'); // 'Great!'
checkGreat('Gila'); // 'Great!'
checkGreat('Roni'); // 'R'


// Level 5.10 Ternary operator
// Declare variable "color" at the beginning of the program.
// Write function colorDecision() that gets a letter.
// Check if the letter equal 'b', return 'blue', 
// otherwise return 'red'.
// Use the function to assign color to the variable.
function colorDecision(letter) {
    return letter === `b` ? "blue" : "red"
}
color = colorDecision('b') // "color" equals "blue"
color = colorDecision('d') // "color" equals "red"
colorDecision("b");