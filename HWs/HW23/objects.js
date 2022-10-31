const student1 = {
    firstName: 'Michael',
    lastName: 'Jackson',
    grades: [65, 99, 75, 81, 44, 63],
    showFullName: function() {
        this.fullName = `${this.firstName} ${this.lastName}`;
        console.log(this.fullName)
    },
    showInitials() {
            console.log(this.firstName[0] + '.' + this.lastName[0] + '.');
    },
}
const student2 = {
    firstName: 'Arnold',
    lastName: 'Schwartzennegger',
    grades: [95, 100, 99, 75, 81, 95],
    showFullName: function() {
        console.log(`${this.firstName} ${this.lastName}`)
    },
    showLastGrade() {
        console.log(this.grades[this.grades.length - 1]);
    },
}

const student3 = {
    firstName: 'Julia',
    lastName: 'Roberts',
    grades: [95, 100, 99, 78, 81, 77, 84, 74],
    setExcellentGrades() {
        this.excellentGrades = this.grades.filter(e => {
            return e >= 85;
        })
    },
}

const student4 = {
    firstName: 'Angelina',
    lastName: 'Jolie',
    grades: [95, 100, 99, 75, 81]
}

const student5 = {
    firstName: 'Brad',
    lastName: 'Pitt',
    grades: [95, 100, 99, 75, 81]
}

console.log(student5.lastName)
// MISSION: show full name (first name and last name) of student3

console.log(`${student3.firstName} ${student3.lastName}`);

student1.showFullName()
student2.showFullName()

const students = [student1, student2, student3, student4, student5];
// MISSION: 
// create array grades that will contain only the arrays of the grades 
// of the students

const allGrades = students.map(el => el.grades);

student1.showInitials();

student2.showLastGrade();

student3.setExcellentGrades();
console.log(student3.excellentGrades);


console.log('task D');
function countGrades() {
    return this.grades.length;
}
students.forEach(e => {
    e.countGrades = function () { return this.grades.length};
    e.numberOfGrades = e.countGrades();
    console.log(e.numberOfGrades);
})
console.log('task E');
console.log(student4['grades'])

console.log('task F');
let someProperty = 'lastName';
console.log(student5[someProperty])
let someOtherProperty = 'lastName';
const namesArray = students.map(e => {
    return e[someOtherProperty];
})
console.log(namesArray);
