// Level 7.3 Используйте цикл "forEach" -
//    выводите на консоль индексы элементов.
//    Выдайте грустное сообщение, когда
//    дойдете до предпоследнего элемента,
//    и выдайте радостное сообщение,
//    когда дойдете до последнего элемента.
//    INPUT - массив, кот. состоит как 
//    минимум из 2-х элементов

//    Пример:
let arr = [true, false, 0, 'rain'];

//    Console:
//    0
//    1
//    2 The cake has gone
//    3 Happy hour!

//    Пример:
//    var arr = [7, 'Snowwhite']

//    Console:
//    0 The cake has gone
//    1 Happy hour!

arr.forEach((e, i, a) => {

    if (i === a.length - 2) {

        console.log(i, "The cake has gone");
    } else if (i === a.length - 1) {
        console.log(i, "Happy Hour!");
    } else {
        console.log(i);
    }

});