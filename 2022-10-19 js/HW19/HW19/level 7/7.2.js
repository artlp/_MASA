// Level 7.2 Наподобие задачи Level 4.3
//    Ваша программа получает 
//    два массива одинаковой длины -
//    массив чисел и массив строчек.
//    Вычислите одним циклом "forEach" 
//    сумму всех чисел, и соедините
//    все строчки в одну.

//    Пример:
var arrNum = [6.25, -0.36, 0, 1, -144];
var arrStr = ['O ', 'la-la, ', 'what ', 'a ', 'day!'];

//    Console:
//    -137.11
//    'O la-la, what a day!'

//    Пример:
//    var arrNum = [-121]
//    var arrStr = ['']

//    Console:
//    -121
let num = 0;
let str = "";
arrNum.forEach((e, i, arr) => {
    str += arrStr[i];
    num += e;
});
console.log(str);
console.log(num);