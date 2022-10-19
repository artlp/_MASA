// 7. Loop training. (No need to use DOM inputs)

//    Write a DO WHILE loop that asks passengers 
//    on a commuter airline if they want a window seat 
//    and keeps track of their responses:
//    'Do you want a window seat?  Please answer Y or N.

//    You may use inputs or just use some hardcoded values,
//    for example assume that
//    the flight has 8 passengers and 4 window seats. 
//    Discontinue the loop when all the windoннw seats are taken. 
//    After the loop ends, display the number 
//    of window seats taken and 
//    the number of passengers questioned.

const maxPassengers = 8;
const windowSeats = 4;
let windowSeatsTaken = 0;
let passengersAsked = 0;
let input;

do {
    passengersAsked++;
    input = prompt('Do you want to take a window seat? Please answer Y or N').toLowerCase();
    if (!input) {
        console.log(passengersAsked, windowSeatsTaken);
        break;
    } else if (input === 'y') {
        windowSeatsTaken++;
    } 
} 
while ((windowSeatsTaken < windowSeats) && (passengersAsked < maxPassengers));
alert(`Passengers registered: ${passengersAsked}, 
Window seats taken: ${windowSeatsTaken}`)

