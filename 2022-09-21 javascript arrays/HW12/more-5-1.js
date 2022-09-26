// Level 5.1 Ваша программа получает массив.
//     Используя цикл "for", пройдите по
//     всем элементам массива до предпоследнего
//     и замените каждый из них на следующий.
//     Последний элемент замените на строчку
//     'I did it!'

//    Пример:
//    var arr = [6.25, -0.36, 0, 1, -144]

//    Console:
//    Original array: [6.25, -0.36, 0, 1, -144]
//    The same array after the change: [-0.36, 0, 1, -144, 'I did it!']

//    Пример:
//    var arr = [true, false, false, false, true, true]

//    Console:
//    Original array: [true, false, false, false, true, true]
//    The same array after the change: [false, false, false, true, true, 'I did it!']

//    Пример:
//    var arr = ['lala','Great Scott!']

//    Console:
//    Original array: ['lala','Great Scott!']
//    The same array after the change: ['Great Scott!', 'I did it!'] 

//    Пример:
//    var arr = ['I am hungry']

//    Console:
//    Original array: ['I am hungry']
//    The same array after the change: ['I did it!'] 

//    Пример:
//    var arr = []

//    Console:
//    Original array: []
//    The same array after the change: [] 
let newArray = [];
function artur(arr) {

    // let temp2 = '';
    for (i = 0; i < arr.length - 1; i++) {
        newArray[i] = arr[i + 1];
        newArray[arr.length - 1] = "I did it!";
    }
    console.log(`Original array: ${arr}
    The same array after the change ${newArray}`);
    // console.log(newArray);
}
var arr = [6.25, -0.36, 0, 1, -144];
artur(arr);