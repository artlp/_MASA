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

function artur(num, pow) {
    let result = 1;
    if (num === 0) {
        result = 0
    } else if (pow > 0) {
    for (i = 1; i <= pow; i++) {
        result = result*num;

    } 
} else if (pow < 0) {
    for (i = 1; i <= Math.abs(pow); i++) {
        result = result/num;

}
}console.log(result);
}
artur(-2, 12);