// Level 3.4 Ваша программа получает 3 целых числа - 
//    минимум, максимум и шаг (числа подобраны так,
//    чтобы концы промежутка обязательно попадали
//    в ответ). Она создает
//    два массива. В первом - все числа, кот.
//    попадают в заданный промежуток с заданным
//    шагом. Во втором - все те же числа, но
//    в обратном порядке. 
  
//    Пример:
//    var min = -4, max = 11, step 3

//    Console:
//    [-4, -1, 2, 5, 8, 11]
//    [11, 8, 5, 2, -1, -4]

//    Пример:
//    var min = 20, max = 4, step -4

//    Console:
//    [20, 16, 12, 8, 4]
//    [4, 8, 12, 16, 20]

//    Пример:
//    var min = -3, max = 2, step 5

//    Console:
//    [-3]
//    [-3]
function artur(min, max, step) {
    const array =[];
    const arrayReverse = [];
    for (i = min; i < max; i = i + step) {
        console.log(i);
        array.push(i);
        arrayReverse.unshift(i);
    }
console.log(array);
console.log(arrayReverse);

}
artur(-3, 32, 17)