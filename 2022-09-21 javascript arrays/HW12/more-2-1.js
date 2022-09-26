// Level 2.1 Ваша программа получает максимум. 
//          Она выдаёт все числа с большего
//          по меньшее в диапазоне от
//          максимума до -1
 
//    Пример:
//    var max = 4

//    Console:
//    4
//    3
//    2
//    1
//    0
//    -1

//    Пример:
//    var max = -1

//    Console:
//    -1

//    Пример:
//    var max = 0

//    Console:
//    0
//    -1

//    Пример:
//    var max = -4

//    Console:

function artur(max) {
    for (i=max; i >= -1; i--) {
        console.log(i);
    }
}
artur(24)