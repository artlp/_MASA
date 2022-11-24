const hero = {
    nickName: 'Batman',
    realName: 'Bruce Wane'
}

/* let nickName = hero.nickName;
let realName = hero.realName; 

is the same as */

// object destructuring
const { nickName, realName } = hero;

const hero2 = {
    heroName: 'Hulk',
    fullName: 'Bruce Banner',
    color: 'green'
}

// MISSION: use destructuring to create variables 
/// heroName, fullName and color with the values of hero2

// const { heroName, color, fullName } = hero2;
// we could change the order as not the order
// but the names are important
const { heroName, color } = hero2;

const hero3 = ["IronMan", "Tony Stark", "businessman", "genius","milliarder","playboy","inventor"]

const [ ironNick, ironName ] = hero3;

console.log(ironNick) // IronMan
console.log(ironName) // Tony Stark

// ... - rest operator (all the REST elements)
const [ironManNick, ironManName, ...ironManTitles] = hero3;
console.log(ironManNick) // IronMan
console.log(ironManName) // Tony Stark
console.log(ironManTitles) // ["businessman", "genius","milliarder","playboy","inventor"]

const colors = ['red', 'green', 'yellow', 'blue', 'purple','white','grey']
// MISSION: use variables firstColor, secondColor and thridColor -
// put there values of the first 3 colors,
// and put other colors into the variable otherColors 
console.log(firstColor) // red
console.log(secondColor) // green
console.log(thirdColor) // yellow
console.log(otherColors) // []








