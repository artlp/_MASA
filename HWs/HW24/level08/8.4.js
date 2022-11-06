/* Level 8.4 BMI = weight/height^2
Meet Moshe and Dani

a.	For each of the two persons create an object 
with their name and last name, 
mass and height as properties
b.	To each object add method to calculate BMI, 
to save it as a property of the object and 
to return it
c.	Log to the console or to the HTML page 
who has the highest BMI, the full names 
of the both (use method that concatenates 
    the name and the last name) and their BMI. 
    Do not forget, there could be a draw.
    If you need some new methods for this, add new methods to Moshe and Dani.
    */

const Moshe = {
    firstName: 'Moshe',
    lastName: 'Gabagool',
    age: 34,
    weight: 83,
    height: 174,
};

const Dani = {
    firstName: 'Dani',
    lastName: 'Milokhin',
    age: 15,
    weight: 57,
    height: 185,
};

function bmiCalc(weight, height) {
    return Math.round(weight / height / height * 10000);
};

Dani.bmi = bmiCalc(Dani.weight, Dani.height);
Moshe.bmi = bmiCalc(Moshe.weight, Moshe.height);

function print() {
    const fullnames = [`${Dani.firstName} ${Dani.lastName}`, `${Moshe.firstName} ${Moshe.lastName}`];
    switch (true) {
        case Dani.bmi > Moshe.bmi:
            console.log(`${fullnames[0]} has higher BMI than ${fullnames[1]}`);
            break;
        case Dani.bmi < Moshe.bmi:
            console.log(`${fullnames[1]} has higher BMI than ${fullnames[0]}`);
            break;
        default:
            console.log(`${fullnames[0]} and ${fullnames[1]} have equal BMI`);
            break;
    }
}
print();