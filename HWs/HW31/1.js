/* 1. Regular expressions.(Reminder: ^-beginning of the line, $-end of the line,
    [^]-negation)
    
    
    Use replace() 
     a) Insert ** in the beginning of line.
     b) If there is no . ! or ? at the end of line, put dot.
     */

let proverb = "Opportunity did not nock until I built a door";
let newx = '';
newx = proverb.replace(/^/, `**`);
if (/[^.?!]$/.test(newx)) {
    newx = newx + '.';
}
console.log(newx);