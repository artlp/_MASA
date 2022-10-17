// Level 3

// a. Что празднуем? Продолжение Level 2.1.

//    Используйте DO WHILE statement.
//    Программа несколько раз получает месяц и число
//    и сообщает, на какие праздники
//    попала эта дата. Программа останавливается,
//    когда вводится дата, не относящаяся к празднику.
//    "Tishrei", 1-22 - "Autumn Holidays"
//    "Kislev", 24-30 - "Chanuka"
//    "Tevet", 1-3 - "Chanuka"
//    "Shvat", 15 - "Tu biShvat"
//    "Adar", 13-16 - "Purim"
//    "Nisan", 14-21 - "Pesach"
console.log("==============3.1==============");
let day = 14;
let month = "Adar";
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

    default:
        console.log("Not a holiday");
        cancel = false;
        break;
    }

} while (false)
// console.log("==============OPTION 2 (ONLY WORKS IN BROWSER)==============");
let cancel2 = true;
do {
    let day2 = +prompt("Enter day");
    let month2 = prompt("Enter month");
    if (((day2 >= 1) && (day2 <= 22)) && (month2 === "Tishrei")) {
        console.log("Autumn Holidays");
    } else if (((day2 >= 24) && (day2 <= 30)) && (month2 === "Kislev")) {
        console.log("Chanuka");
    } else if (((day2 >= 1) && (day2 <= 3)) && (month2 === "Tevet")) {
        console.log("Chanuka");
    } else if ((day2 === 15) && (month2 === "Shvat")) {
        console.log("Tu biShvat");
    } else if (((day2 >= 13) && (day2 <= 16)) && (month2 === "Adar")) {
        console.log("Purim");
    } else if (((day2 >= 14) && (day2 <= 21)) && (month2 === "Nisan")) {
        console.log("Pesach");
    } else {
        console.log("Not a holiday");
        cancel2 = false;
    }

} while (cancel2 === true);



// b.    Use cycle 'FOR' to loop over the array and find the average of the elements of the array.

// Examples:
var arr1 = [375, -18, 6.4, 7.12, -0.08, 1, 128, 0, 567, -23];

// // Console: 104.344

var arr2 = [-1.5, 4.6, -7.1, 4];

// // Console: 0

var arr3 = [0, 0, 0, 0, 0, 0];

// // Console: 0

var arr4 = [];

// // Console: 0

var arr5 = [20, 30];

function arrayAvg(array) {
    let sum = 0;
    let number = array.length;
    for (i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log(sum / number);
}

arrayAvg(arr1);
arrayAvg(arr2);
arrayAvg(arr3);
arrayAvg(arr4);
arrayAvg(arr5);

// Level 3.3  У вас есть функция Math.abs() - 
//          она находит абсолютную величину
//          числа (модуль).
//          Ваша программа получает максимум
//          (целое неорицательное). 
//          Она проходит по всем числам от
//          максимум*(-1) до максимума и
//          вызывает для каждого из них
//          функцию Math.abs().

//    Пример:
//    var max = 3

//    Console:
//    3  
//    2
//    1
//    0
//    1
//    2
//    3

//    Пример:
//    var max = 0

//    Console:
//    0
console.log("==============3.3==============");
var max = 13;
for (i = Math.abs(max) * -1; i <= max; i++) {
    console.log(Math.abs(i));
}


// Level 3.4 Ваша программа получает максимум.
//          Напишите функцию, кот. получает
//          число, возводит его в 3-ю степень
//          и вычитает 4.
//          Ваша программа проходит от 0
//          до максимума (не включая максимум)
//          и вызывает функцию для каждого
//          числа.

//    Пример:
//    var max = 5

//    Console:
//    -4
//    -3
//    4
//    23
//    60

//    Пример:
//    var max = 0

//    Console:
//    -4
console.log("==============3.4==============");
let numb = 5;
for (i = 0; i < numb; i++) {
    maxNumb = i ** 3 - 4;
    console.log(maxNumb);

}

// 
// Level 3.5 Похоже на одну из предыдущих задач, но
// с модификацией.
// Ваша программа получает максимум
// (целое число - м.б. как 
// отрицательным, так и
// положительным). 
// Она проходит по всем числам от
// максимум*(-1) до максимума и
// вызывает для каждого из них
// функцию Math.abs().

// Пример:
// var max = 3

// Console:
// 3  
// 2
// 1
// 0
// 1
// 2
// 3

// Пример:
// var max = 0

// Console:
// 0

// Пример:
// var max = -4

// Console:
// 4
// 3  
// 2
// 1
// 0
// 1
// 2
// 3
// 4
console.log("==============3.5==============");
var max2 = -4;
if (max2 >= 0) {
    for (i = Math.abs(max2) * -1; i <= max2; i++) {
        console.log(Math.abs(i));
    }
} else {
    for (i = Math.abs(max2); i >= max2; i--) {
        console.log(Math.abs(i));
    }
}

// Level 3.6 Ваша программа получает число
//          (натуральное) и находит 
//          факториал (!) этого числа. 
//          (Факториал - произведение всех
//           чисел от 1 до самого числа)
//          0! = 1 (Факториал нуля равен 1)

//    Пример:
//    var num = 5

//    Console:
//    120

//    Пример:
//    var num = 0

//    Console:
//    1

//    Пример:
//    var num = 1

//    Console:
//    1
console.log(`==============3.6==============`);
let abc = 5;
let result = 1;
for (i = 1; i <= abc; i++) {
    result = result * i;
    // abc--;
    console.log(result);
}


// Level 3.7 Ваша программа получает 3 целых числа - 
//    минимум, максимум и шаг (числа подобраны так,
//    чтобы концы промежутка обязательно попадали
//    в ответ). Она создает
//    два массива. В первом - все числа, кот.
//    попадают в заданный промежуток с заданным
//    шагом. Во втором - все те же числа, но
//    в обратном порядке. 

//    Пример:
//    var min = -4, max = 11, step 3

//    Console:
//    [-4, -1, 2, 5, 8, 11]
//    [11, 8, 5, 2, -1, -4]

//    Пример:
//    var min = 20, max = 4, step -4

//    Console:
//    [20, 16, 12, 8, 4]
//    [4, 8, 12, 16, 20]

//    Пример:
//    var min = -3, max = 2, step 5

//    Console:
//    [-3]
//    [-3]
console.log(`=========3.7===========`);
var min3 = -4, max3 = 11, step3 = 3;
const arrayX = [];
const arrayY = [];
for (i = min3; i <= max3; i = i + step3) {
    arrayX.push(i);
    arrayY.unshift(i);
}
console.log(arrayX, arrayY);