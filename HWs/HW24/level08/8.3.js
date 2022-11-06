// Level 8.3 You've got array of objects of "Lord of the Rings" cast:

const LordOfTheRingCast = [{character: "Frodo", actor: "Elijah Wood"}, 
                           {character: "Gandalf", actor: "Ian McKellen"},
                           {character: "Legolas", actor: "Orlando Bloom"},
                           {character: "Sam", actor: "Sean Astin"},
                           {character: "Aragorn", actor: "Viggo Mortensen"},
                           ]

/*    Add one more character to the array.
   Go by "forEach" loop over the array and show all the actor's first name 
   in the console. During the same looping create string with all the characters,
   it shood look like "Frodo-Gandalf-Legolas-Sam-Aragorn-Somebody".
 */
LordOfTheRingCast.push({character: "Gollum", actor: "Daniel Radcliffe"})
console.log(LordOfTheRingCast);
let text = '';
LordOfTheRingCast.forEach((e) => {
    console.log(e.actor.split(' ')[0]);
    text += `${e.character}-`;
})
console.log(text.substring(0,text.length-1));
