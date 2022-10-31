/* 8. Split() and join() and ... 
   a) const arr = ['a','bc','def','geh','','abcd','stop','start', 'tararam','olala','lalala','zzzz']

      Exchange the second letter (index=1) in each string.
      The result should be like this:
      console.log(arr) // ['a','b*','d*f','g*h','','a*cd', ...] */


const arr = ['a', 'bc', 'def', 'geh', '', 'abcd', 'stop', 'start', 'tararam', 'olala', 'lalala', 'zzzz'];
let str = 'superkalifragelisticexpialidocious';
let string = null;

arr.forEach((e,i,arr) => {
    if (e.length >= 2) {
        string = `${e.substring(0, 1)}*${e.substring(2)}`;
        arr[i] = string;
    } else {
        arr[i] = e;
    }
});
console.log(arr);


/* b) let str = 'superkalifragelisticexpialidocious';
Exchange every second letter by '*' */
let str1 = 'superkalifragelisticexpialidocious';
const arrayB = str1.split('');
for (x = 1; x < arrayB.length; x += 2) {
    arrayB[x] = '*';
    str1 = arrayB.join('');
}
console.log(str1);



