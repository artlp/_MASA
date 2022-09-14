//* TRUTHY AND FALSY VALUES
//* Falsy values (in addition to false itself):
//* - null
//* - '' (empty string) ""  ``
//* - 0
//* - undefined
//* - NaN (not a number)

// Natalie, [14.09.2022 10:49]
// if (true) console.log('There was TRUE')
// else console.log('There was FALSE')
// VM4300:1 There was TRUE
// undefined
// if (false) console.log('There was FALSE')
// else console.log('There was TRUE')
// VM4444:2 There was TRUE

// Natalie, [14.09.2022 10:52]
// if (67) console.log('There was TRUE')
// else console.log('There was FALSE')
// VM4890:1 There was TRUE
// undefined
// if ('Ayanot') console.log('There was TRUE')
// else console.log('There was FALSE')
// VM4966:1 There was TRUE
// undefined
// if (NaN) console.log('There was TRUE')
// else console.log('There was FALSE')
// VM5048:2 There was FALSE
// undefined
// if ('') console.log('There was TRUE')
// else console.log('There was FALSE')
// VM5125:2 There was FALSE
// undefined
// if (' ') console.log('There was TRUE')
// else console.log('There was FALSE')
// VM5185:1 There was TRUE

var num1 = prompt("enter a number");
if (isNaN(num1)) {
    console.log(`not a number`);
} else {
    console.log(`it's a number`);
}

var word = prompt(`ENTER A WORD FOR TRUTHY OR FALSY CHECK`);
if (word) {
    console.log('thank you');
} else {
    console.log(`I asked for a word`);
}