function avgOfTwo(n1,n2) {
    var avg = (n1 + n2)/2;
    console.log(`Average of ${n1} and ${n2} is ${avg}`);
}
avgOfTwo(+prompt(`Enter number #1`), +prompt(`Enter number #2`))

//* MISSION CREATE A FUNCTION firstAndLast() showing 

function firstAndLast(word) {
    var word = prompt("Enter your word");
    var firstLetter = word[0];
    var lastLetter = word[word.length-1];
    console.log(`Your word is ${word}, its first letter is: ${firstLetter}, its last letter is: ${lastLetter}`);
}
firstAndLast();