/* 4. Train array methods.

Create function rev(str) that reverses the given string
a) with Array.reverse()
b) without Array.reverse()

input: 'sandman', output: 'namdnas'
input: '1\n\t\t$45', output: '54$\t\t\n1'
input: '#', output: '#'
input: '', output: ''
input: '   3 spaces in the beginning, and 2 spaces in the end  ', 
output: '  dne eht ni secaps 2 dna ,gninnigeb eht ni secaps 3   '

The HINT is at the end of the file
 */

function rev(str, str2) {
    let x = str.split('').reverse().join('');
    let z = str.split('');
    console.log(z);
    let y = [];
    for (i = 0; i < z.length; i++) {
        y.unshift(z[i]);
    }
    y = y.join('');
    console.log(`Original string: ${str}
with array.reverse: ${x}
without array.reverse: ${y}`
);
}

rev("   another wasted day 34 ^$ !  /")