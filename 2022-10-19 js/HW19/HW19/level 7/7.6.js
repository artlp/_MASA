// Level 7.6 а) Напишите функцию calc3(), кот. получает 2 числа 
//       и умножает их сумму на их разность
//    b) Запустите эту функцию для нескольких пар параметров:
//       73 и 18
//       0 и -6
//       -11.34 и 121
//       Output:
//        5005
//         -36
//       15835.8044
//    c) Напишите функцию calc4(), кот. получает имя и 2 числа
//       и запускает функцию calc3() так, чтобы получилась
//       надпись вроде "John, 73 + 18 multiplied by 73 - 18 are 5005"
//    d) Запустите функцию calc4() для следующих троек параметров:
//       "John", 73, 18
//       "Mike", 0, -6
//       "Lisa", -11.34, 121
//       "Jane", 4, 12
//       Output: 
//       "John, 73 + 18 multiplied by 73 - 18 are 5005"
//       "Mike, 0 + -6 multiplied by 73 - -6 are -36"
//       "Lisa, -11.34 + 121 multiplied by -11.34 - 121 are 15835.8044"
//       "Jane, 4 + 12 multiplied by 4 - 12 are -128"
//    е) Даны 3 массива:
//       const arr3 = [73,0,335,-11.34,4,0,4032]
//       const arr4 = [18,-6,335,121,12,0,3999]
//       const names1 = ["John","Mike","Mary","Lisa","Jane","David","Ann"]
//       Пройдите по всем трем массивам при помощи одного общего цикла for и запустите функцию calc4(), используя на каждом шаге цикла, соответствующие по индексу числа и имя
//       Output:
//       "John, 73 + 18 multiplied by 73 - 18 are 5005"
//       "Mike, 0 + -6 multiplied by 73 - -6 are -36"
//       "Mary, 335 + 335 multiplied by 335 - 335 are 0"
//       "Lisa, -11.34 + 121 multiplied by -11.34 - 121 are 15835.8044"
//       "Jane, 4 + 12 multiplied by 4 - 12 are -128"
//       "David, 0 + 0 multiplied by 0 - 0 are 0"
//       "Ann, 4032 + 3999 multiplied by 4032 - 3999 are 265023"
//    f) Даны 3 массива:
//       const arr3 = [73,0,335,-11.34,4,0,4032]
//       const arr4 = [18,-6,335,121,12,0,3999]
//       const names1 = ["John","Mike","Mary","Lisa","Jane","David","Ann"]
//       Пройдите по одному из массивов припомощи forEach, используйте индекс, чтобы одновременно в том же цикле обратиться к соответствующим элементам двух других массивов и запустите функцию calc4()
//       Output:
//       "John, 73 + 18 multiplied by 73 - 18 are 5005"
//       "Mike, 0 + -6 multiplied by 73 - -6 are -36"
//       "Mary, 335 + 335 multiplied by 335 - 335 are 0"
//       "Lisa, -11.34 + 121 multiplied by -11.34 - 121 are 15835.8044"
//       "Jane, 4 + 12 multiplied by 4 - 12 are -128"
//       "David, 0 + 0 multiplied by 0 - 0 are 0"
//       "Ann, 4032 + 3999 multiplied by 4032 - 3999 are 265023"
//    g) Даны 3 массива:
//       const arr3 = [73,0,335,-11.34,4,0,4032]
//       const arr4 = [18,-6,335,121,12,0,3999]
//       const names2 = ["John","Mike","Mary","Lisa","Jane","David","Margaret"]
//       Пройдите по всем трем массивам при помощи одного общего цикла while или do while и запустите функцию calc4(), используя на каждом шаге цикла, соответствующие по индексу числа и имя. Остановите выполнение цикла, если
//       имя будет длиннее, чем 5 букв.
//       Output:
//       "John, 73 + 18 multiplied by 73 - 18 are 5005"
//       "Mike, 0 + -6 multiplied by 73 - -6 are -36"
//       "Mary, 335 + 335 multiplied by 335 - 335 are 0"
//       "Lisa, -11.34 + 121 multiplied by -11.34 - 121 are 15835.8044"
//       "Jane, 4 + 12 multiplied by 4 - 12 are -128"
//       "David, 0 + 0 multiplied by 0 - 0 are 0"
//    h) Поменяйте в предыдущем задании массив names2 
//       на массив names1. Убедитесь, что результат получается верный
//       Output:
//       "John, 73 + 18 multiplied by 73 - 18 are 5005"
//       "Mike, 0 + -6 multiplied by 73 - -6 are -36"
//       "Mary, 335 + 335 multiplied by 335 - 335 are 0"
//       "Lisa, -11.34 + 121 multiplied by -11.34 - 121 are 15835.8044"
//       "Jane, 4 + 12 multiplied by 4 - 12 are -128"
//       "David, 0 + 0 multiplied by 0 - 0 are 0"
//       "Ann, 4032 + 3999 multiplied by 4032 - 3999 are 265023"

console.log("~~~7.6 A~~~");
function calc03(a, b) {
    return (a + b) * (a - b);
}
console.log(calc03(1, 4));

console.log("~~~7.6 B~~~");
console.log(calc03(73, 18), calc03(0, -6), calc03(-11.34, 121));

console.log("~~~7.6 C~~~");
function calc04(name, a, b) {
    console.log(`${name}, ${a}+${b} multiplied by ${a}-${b} = ${calc03(a, b)}`);
};
calc04("John", 73, 18);

console.log("~~~7.6 D~~~");
calc04("Artur", 1, 2);
calc04("John", 73, 18);
calc04("Mike", 0, -6);
calc04("Lisa", -11.34, 121);
calc04("Jane", 4, 12);

console.log("~~~7.6 E~~~");
const arr3 = [73, 0, 335, -11.34, 4, 0, 4032];
const arr4 = [18, -6, 335, 121, 12, 0, 3999];
const names1 = ["John", "Mike", "Mary", "Lisa", "Jane", "David", "Ann"];
for (i = 0; i < arr3.length; i++) {
    console.log(names1[i].length);
    calc04(names1[i], arr3[i], arr4[i]);
}

console.log("~~~7.6 F~~~");
names1.forEach((e, i, a) => {
    calc04(e, arr3[i], arr4[i]);
});

console.log("~~~7.6 G~~~");
const names2 = ["John","Mike","Mary","Lisa","Jane","David","Margaret"]
i = 0;
while (i < names2.length && names2[i].length <= 5) {
    calc04(names2[i], arr3[i], arr4[i]);
    i++;
}
console.log("~~~7.6 H~~~");
i = 0;
while (i < names1.length && names1[i].length <= 5) {
    calc04(names1[i], arr3[i], arr4[i]);
    i++;
}