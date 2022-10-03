// // * 1. Напишите цикл for, кот. выдаёт на консоль все целые числа от -5 до 14
// for (i = -5; i < 15; i++) {
//     console.log(i);
// }

// // * 2. Напишите цикл for, кот. выдаёт на консоль все четные числа, 
// //*   начиная с 2-х и заканчивая 22
// for (i = 2; i < 23; i+=2) {
//     console.log(i);
// }

// //* 3. Напишите цикл for, кот. выдаёт на консоль все целые числа, 
// //*   начиная с 12 и заканчивая 1

// for (i = 12; i >= 1; i--) {
//     console.log(i);
// }

// //* 4. Напишите цикл for, кот. выдаёт на консоль каждое пятое число, 
// //*    начиная с 35 и заканчивая -10 ("минус 10")

// for (i = 35; i >= -10; i--) {
//     console.log(i);
// }

// // 5. При помощи двух команд prompt и функции parseInt() 
// //    присвойте двум переменным значения минимума и максимума.

// //    Напишите цикл for, кот. выдаёт на консоль все целые числа, 
// //    начиная с минимума и заканчивая максимумом

// let max = parseInt(35); //replace with prompt in browser
// let min = parseInt(20); // replace with prompt in browser
// for (i = min; i <= max; i++) {
//     console.log(i);
// }


// 6. При помощи трёх команд prompt и функции parseInt()
//    присвойте трём переменным значения минимума, максимума и шага.

//    Напишите цикл for, кот. выдаёт на консоль все целые числа
//    с промежутком в заданный шаг,
//    начиная с минимума, заканчивая максимумом (включительно, если шаг позволяет)
// let max = parseInt(35); //replace with prompt in browser
// let min = parseInt(13); // replace with prompt in browser
// let step = parseInt(3)
// for (i = min; i <= max; i=i+step) {
//     console.log(i);
// }



// // 7. var cyclones = ['Ana','Bill','Claudette','Danny','Elsa','Fred','Grace','Henri','Ida','Julian','Kate','Larry','Mindy','Nicholas','Odette','Peter','Rose','Sam','Teresa','Victor','Wanda']

// //    Use cycle 'FOR' to loop over the array and print the strings to the console.
// var cyclones = ['Ana','Bill','Claudette','Danny','Elsa','Fred','Grace','Henri','Ida','Julian','Kate','Larry','Mindy','Nicholas','Odette','Peter','Rose','Sam','Teresa','Victor','Wanda']
// for (i = 0; i < cyclones.length; i++) {
//     console.log(cyclones[i]);
// }



// 8. Write a function rep() that gets a string and a number
//    and repeats the string number of times on the next line.
//    (use function repeat())

//    For example:
//    rep('house',3)

// output:
//    house
//    house
//    house

function rep(string, number) {
    for (i = 1; i <= number; i++) {
        console.log(string);
    }
}
rep("bob", 6)