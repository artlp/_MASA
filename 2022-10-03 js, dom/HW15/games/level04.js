// Level 4.1 Ваша программа получает массив
//    чисел и отдельное число.
//    Она проходит по нему циклом "for" и
//    увеличивает каждый элемент массива
//    на заданное число.

//    Пример:
//    var arr = [-3.4, 3.7, 0, 5.6, 0.5], num = 2

//    Console:
//    [-1.4, 5.7, 2, 7.6, 2.5]

//    Пример:
//    var arr = [], num = 3

//    Console:
//    []

//    Пример:
//    var arr = [-8], num = 10

//    Console:
//    [2]

//    Пример:
//    var arr = [4.5, 0, 2.8, -15, -12.3], num = -2.8

//    Console:
//    [1.7, -2.8, 0, -17.8, -15.1]

console.log(`=====4.1=====`);
var arr = [-3.4, 3.7, 0, 5.6, 0.5], num = 2;
function fourOne(array, number) {
    for (i = 0; i < array.length; i++) {
        array[i] = array[i] + number;
    }
    console.log(array);
}

fourOne(arr, num);


// Level 4.2 Ваша программа получает массив
//    чисел.
//    Напишите функцию, кот. находит 
//    абсолютное значение числа (модуль), а
//    потом вычисляет его квадратный корень
//    при помощи Math.sqrt() и выдает
//    результат. Пройдитесь циклом "for"
//    по массиву и вызовите вашу функцию
//    для каждого числа так, чтобы результаты
//    образовали новый массив.

//    Пример:
//    var arr = [6.25, -0.36, 0, 1, -144]

//    Console:
//    Old array: [6.25, -0.36, 0, 1, -144]
//    New array: [2.5, 0.6, 0, 1, 12]

//    Пример:
//    var arr = [-121]

//    Console:
//    Old array: [-121]
//    New array: [11]

//    Пример:
//    var arr = []

//    Console:
//    Old array: []
//    New array: []
console.log(`=====4.2=====`);
var arr = [6.25, -0.36, 0, 1, -144];
var newArr = [];
let temp;
for (i = 0; i < arr.length; i++) {
    temp = Math.sqrt(Math.abs(arr[i]));
    newArr.push(temp);
}
console.log(newArr);

// Level 4.3 Ваша программа получает 
//    два массива одинаковой длины -
//    массив чисел и массив строчек.
//    Вычислите одним циклом "for" 
//    сумму всех чисел, и соедините
//    все строчки в одну.

//    Пример:
//    var arrNum = [6.25, -0.36, 0, 1, -144]
//    var arrStr = ['O ','la-la, ','what ','a ','day!']

//    Console:
//    -137.11
//    'O la-la, what a day!'

//    Пример:
//    var arrNum = [-121]
//    var arrStr = ['']

//    Console:
//    -121

console.log(`=====4.3=====`);
var arrNum = [6.25, -0.36, 0, 1, -144];
var arrStr = ['O ', 'la-la, ', 'what ', 'a ', 'day!'];
let numSumx = 0;
let arrStrx = "";
for (i = 0; i < arrNum.length; i++) {
    numSumx += arrNum[i];
    arrStrx += arrStr[i];
}
console.log(numSumx);
console.log(arrStrx);

// Level 4.4 
// It is more complicated version of Level 2.2
//    Use cycle 'WHILE' to loop over the cycle and print the strings to the console.
//    If you encounter something that not a string, exit the loop.




console.log(`=====4.4=====`);
var John = ['John','Smith','developer','Ohio',1997,'John','Mary'];
let x = 0;
while (typeof(John[x]) === 'string') {
    console.log(John[x]);
    x++;
}console.log(`EXITING THE LOOP! ${John[x]} is a ${typeof(John[x])}`);

// Level 4.5 Go over the array and show it's elements till you encounter 'true' (don't show 'true') 
var arr1 = [23, false, 'lala', 'haha', true, false, false, true]
var arr2 = [123, false, 'olala', 'haha','OMG']
var arr3 = [true, 23, false, 'lala', 'haha', true, false, false, true]
console.log(`=====4.5=====`);
function fourFive(arrayb) {
let u = 0;
do {
    console.log(arrayb[u]);
    u++;
} while ((arrayb[u] !== true) && (u !== arrayb.length))
}
fourFive(arr1);
fourFive(arr2);
fourFive(arr3);
