// Level 5.2 Ваша программа получает массив.
//     Сделайте так, чтобы каждый элемент 
//     массива, кроме последнего, оказался
//     заменен на следующий.
//     Последний элемент замените на строчку
//     'I did it!' - в этой задаче результат
//     должен быть тот же, что и в предыдущей, 
//     но нельзя пользоваться циклом, а 
//     требуется использовать некоторые 
//     из методов массивов, кот. мы изучали 
//     (push(), pull(), shift(), unshift())

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
function artur(arr) {
    arr.shift();
    arr.push("I did it!");
    console.log(`${arr}`);
}
var arr = ['lala','Great Scott!'];
artur(arr);