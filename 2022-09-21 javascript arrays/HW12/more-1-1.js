// Level 1.1 Ваша программа получает 3 целых числа - 
//    минимум, максимум и шаг. Она запускает
//    цикл "for" и выдает все числа, кот.
//    при этом получатся 

//    Пример:
//    var min = -2, max = 10, step 2

//    Console:
//    -2
//    0
//    2
//    4
//    6
//    8
//    10

//    Пример:
//    var min = -4, max = -6, step 3

//    Console:

//    Пример:
//    var min = -1, max = 2, step 5

//    Console:
//    -1
function artur(min, max, step) {
    for (i = min; i <= max - step; i = i + step) {
        console.log(i);
    }
    console.log(i);
}
artur(-2, 2, 6);