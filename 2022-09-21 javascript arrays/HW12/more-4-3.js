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

function artur(arr1, arr2) {
    let sum = 0;
    let string = '';
    for (i = 0; i < arr1.length; i++) {
        sum = sum + arrNum[i];
        string = arrStr.join("");
    }
    console.log(sum + "\n" + string);
}
var arrNum = [6.25, -0.36, 0, 1, -144];
var arrStr = ['O ', 'la-la, ', 'what ', 'a ', 'day!'];

artur(arrNum, arrStr);