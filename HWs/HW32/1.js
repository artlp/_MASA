// 1. Regular expressions 

// a) 
console.log(`=====a=====`);
const ar1 = ['cat', 'cater', 'concatenation', 'dog', 'dogma', 'scates', 'catamaran', 'catapult', 'tomcat', 'tomdog'];
// Go over ar1 and create 3 new arrays: 

//    1 - containing all the strings from ar1, starting with "cat"
//    2 - containing all the strings from ar1, ending with "cat"
//    3 - containing all the strings from ar1, equal to "cat"
let startcat = [];
let endcat = [];
let cats = [];
for (const item of ar1) {
    switch (true) {
        case /^cat$/.test(item):
            cats.push(item);
            break;
        case /^cat/.test(item):
            startcat.push(item);
            break;
        case /cat$/.test(item):
            endcat.push(item);
            break;

        default:
            break;
    }
}
console.log(`startcat:${startcat}`);
console.log(`endcat:${endcat}`);
console.log(`cats:${cats}`);

console.log(`======b=======`);
let ar2 = ['surrender', 'unicorn', 'newer', 'door', 'empty', 'eel', 'pest'];

//   Create new array from ar2. If the original word ended with
//   "er", it should end now with "est" instead. If the original word ended
//   with "t", it should now end with "d" instead. All other words
//   should be copied as is.

let arB = ar2.map(item => {
    return item.replace(/er$/, 'est').replace(/t$/, 'd');
});
console.log(arB);

// c) 
console.log(`======c=======`);

let ar3 = ['live', 'arrange', 'render', 'sist', 'place', 'send'];
let ar4 = ['cat', 'hack', 'develop', 'serv', 'ston'];

//    Use replace() and regular expressions. Add to all the words
//    of ar3 "re" at the beginning. Add to all the words of ar4
//    "er" at the end.

for (const [i, el] of ar3.entries()) {
    ar3[i] = el.replace(/^/,"re");
}
console.log(ar3);
for (const [i, el] of ar4.entries()) {
    ar4[i] = el.replace(/$/,"er");
}
console.log(ar4);

// d)  Create function checkSentence(str) that checks that the given string looks like a sentence:
//         - remove all the whitespaces from the beginning and the end
//         - check that the sentence starts with an uppercase English letter
//         - check that the sentence ends with a dot or exclamation or question sign
//         - return true or false

//         Create function testing(ar1,ar2) that goes over "inputs",
//         tries checkSentence() and checks if the output is as expected
//         (in outputs). If all the outputs are as expected, conclude
//         that checkSentence() is good function.

const inputs = ['\t\t Quick brown fox jumps over a lazy dog. ','','\n\t  ','Broken crayons still color.',"I don't know ",'what happens in Vegas stays in Vegas.',"Are you insane?!  ","?","   \nHave you ever been to Paris?"]
const outputs = [true,false,false,true,false,false,true,false,true]
console.log(`======d=======`);

function checkSentence(str) {
    str2 = str.replace(/^\s+|\s+$/g,'');
    // console.log(str2);
    return /(^[A-Z]).*[?!.]$/.test(str2);
}
console.log(checkSentence("           Hello sir, my name is Artur.       "));
console.log(`====d2=====`);
function testing(ar1,ar2) {
    let badFunction = false;
    let comparisonArray = [];
    ar1.forEach((e,i,ar) => {
        if (checkSentence(e) !== outputs[i]) {
            badFunction = true;
            console.log("ERROR");
        } else {
            console.log(checkSentence(e), outputs[i]);
        }
        comparisonArray.push(checkSentence(e));

    })
    badFunction === true ? console.log("BAD FUNCTION") : console.log("GOOD FUNCTION");
}

testing(inputs,outputs);