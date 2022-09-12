var answer = confirm('Will you brush your teeth today?')
console.log(answer);
console.log('typeof answer = ' + typeof answer);

// ! When we have just one command we don't have to use {}
if (answer === true)
   console.log("Great!");
else
   console.log("Your dentist loves you.");


//* Ternary operator is like the above IF

answer === true ? console.log("Great-ternary") : console.log("FALSE-TERNARY");

var response = answer === true ? 'GREAT' : 'NOT SO GREAT';
console.log(response);

var missionPrompt = confirm("Ты встаешь по утрам?");
missionPrompt === true ? console.log("Молодец") : console.log("Попробуй ложиться пораньше");

//* BACKTICKS - `command ${smth}` - template string
var response2;
var speed = prompt("How fast do you drive on the road?");
if (speed !== null && speed !== undefined && speed !== '') {
   speed = +speed;
   if (isNaN(speed))
      response2 = "Not a number!";
   else
      response2 = speed > 60 ? "Stop breaking the law" : "Keep being a responsible driver";
} else {
   response2 = "WRONG INPUT!"
}
console.log(response2);


//* with prompt ask for a number , use ternary operator to tell if it's a number or not

var missionNumber = prompt("Enter your number please");
var result = missionNumber === '' || missionNumber === null || isNaN(missionNumber) ? "it's not a number" : "it's a number";
console.log(result);