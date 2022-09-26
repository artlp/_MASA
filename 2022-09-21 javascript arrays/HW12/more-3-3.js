// Level 3.3 Ваша программа получает число
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
function artur(number) {
    let x = 1;
    for (i = 1; i <= number; i++) {
        x = x*i;
        // console.log(x,i);
    }
    console.log(x);
}
artur(5);