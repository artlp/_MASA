// 1. Regular expressions 

const str = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const regex = /[^\w\s]/g;

// Use \w,\d,\s etc. and str.search(regex) to find the first character 
// that is not a word character or whitespace

// Show the index of the character and the character itself.

console.log(str[str.search(regex)], str.search(regex));
