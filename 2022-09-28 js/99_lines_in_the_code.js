var oldBottles = 100;
var newBottles;
function beerSong() {
newBottles=oldBottles-1;
while (newBottles > 1) {
oldBottles--;
newBottles = oldBottles-1; //newbottles becomes X, oldbottles becomes X-1, need to swap them. BUT WHY
console.log(oldBottles + " bottles of beer on the wall, " + oldBottles + " bottles of beer. Take one down and pass it around, " + newBottles + " bottles of beer on the wall.");
    if (newBottles === 1) {
        oldBottles = 99;
        console.log(newBottles + " bottles of beer on the wall, " + oldBottles + " bottles of beer. Take one down and pass it around, no more bottles of beer on the wall.");
        console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + oldBottles + " bottles of beer on the wall");
 
    } 
        }
}
beerSong();
