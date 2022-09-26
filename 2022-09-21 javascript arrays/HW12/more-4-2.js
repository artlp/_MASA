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
function artur(array) {
    const newArr = [];
    // console.log(arr);
    // console.log(newArr);
    for (i = 0; i < arr.length; i++) {
        newArr[i] = Math.sqrt(Math.abs(arr[i]));
        // console.log(newArr[i]);
    }
    console.log("Old array: " + arr);
    console.log("New array: " + newArr);
}
const arr = [6.25, -0.36, 0, 1, -144];
artur(arr);
