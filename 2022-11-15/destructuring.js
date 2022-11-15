const hero = {
    nickName: 'Batman',
    realName: 'Bruce Wayne',
};

// let nickName = hero.nickName;
// let realName = hero.realName;

const {nickName, realName} = hero;

console.log(nickName, realName + 
    "\n" + "________________________");

const hero2 = {
    heroName: 'Hulk',
    fullName: 'Bruce Banner',
    color: 'green',
}

const {heroName, fullName, color} = hero2;
console.log(`heroname = ${heroName}
fullName = ${fullName}
color = ${color}
________________________
`);
