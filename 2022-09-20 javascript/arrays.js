let variable = 'random text from variable';
const arr2 = ['sdad', variable, 3654, '', null, true, { color: 'red' }, 4.5];
console.log(arr2);
console.log(`Element with index 2: ${arr2[2]}`);
console.log(`Length of array: ${arr2.length}`);
console.log(`arr2 to string: ${arr2.toString()}`);
console.log(`Data type of array: ${typeof arr2}`);

console.log(`// MISSION: replace the element with index 2 by 
//            it's value multiplied by 2.
//      Show the new array.`);

const arr3 = ['Tel-Aviv', 120, 4.5, '', null, true, { color: 'red' }];
console.log(arr3);
arr3[2] = arr3[2] * 2;
console.log(arr3);

//* filling array with numbers with loop
const array4 = ["empty"];
console.log(`array4 is currently ${array4}`);
array4.pop();
console.log("generating numbers to push into array");
for (i = 1; i < 15; i++) {
    array4.push(i);

}
console.log(`array4 is now ${array4}`);

console.log(`// MISSION: replace the element with index 0 by 
//       the same string, but in UPPER CASE`);
const arr5 = ['Tel-Aviv', 120, 4.5, '', null, true, { color: 'red' }];
console.log(arr5);
arr5[0] = arr5[0].toUpperCase();
console.log(arr5);

const arr6 = arr5;
console.log(arr6);
arr6[0] = 'Rehovot'; //! меняются оба массива
console.log(arr6, arr5);
arr6.push(32);//! меняются оба массива
console.log(arr6, arr5);

//* pushing values into array
let array_3 = [];
array_3.push(34, "asdad", "asdada", 556.5);
console.log(array_3);
array_3.pop(); // * remove last element from an array and returns it
let poppedElement = array_3.pop();
console.log(array_3, `popped element: ${poppedElement}`);

console.log(`// MISSION: shift() and unshift() add and remove elements 
//     in the begginning of array.
//   Check, which one adds element and which one removes.`);
const shiftArray = [1, 2, 3, 4, 5];
console.log(shiftArray);
let shiftVal = shiftArray.shift();
console.log(`shift removes the first element: ${shiftVal} and our array is now ${shiftArray}`);
let unShiftVal = shiftArray.unshift(-2, -1, 0);
console.log(`unshift adds elements: ${unShiftVal} and our array is now ${shiftArray}`);

console.log(`// MISSION: 
const numArr = [6564, 1.1, 23.5, 66.22, 123, -45]
// Go over the array, use function Math.sqrt() to find
// square root of each element and put it instead of the element,
// rounded (Math.round())`);
const numArr = [6564, 1.1, 23.5, 66.22, 123, -45];
console.log(numArr);
for (i = 0; i < numArr.length; i++) {
    numArr[i] = Math.round(Math.sqrt(numArr[i]));
}
console.log(numArr);


console.log(`-----------ANOTHER ARRAY LOOP MISSION`);
const food = ['Pizza', 'Lasagna', 'Hinkali', 'Hummus', 'Falafel', 'Sabih'];
const menu = [];
const arrayLength = food.length
for (i = 0; i < arrayLength; i++) {
    let x = food.shift();
    menu.push(`${i}. ${x}`);
}
console.log(menu);

console.log(`// MISSION: go over the array "food", start from the memeber
//        with index 1, show pairs of food and drink
// on the appropriate places (with odd indexes only)
// example of output: 'Lasagna and Vine', 'Hummus and Beer' ...`);
const food2 = ['Pizza', 'Lasagna', 'Hinkali', 'Hummus', 'Falafel', 'Sabih'];
const drinks = ['Cola', 'Wine', 'Water', 'Beer', 'Juice', '7-Up']
console.log(food2, drinks);
for (i = 1; i < food2.length; i += 2) {
    console.log(`${food2[i]} and ${drinks[i]}`);
}