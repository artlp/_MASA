const student1 = {
    firstName: 'John',
    lastName: 'Travolta',
    grades: [97, 11, 21, 98, 19, 75, 25, 83, 61, 65],
    showFullName() {
        this.fullName = `${this.firstName} ${this.lastName}`;
        console.log(`${this.fullName} ${this.grades}`)
    },
};

const student2 = {
    firstName: 'Arnold',
    lastName: 'Schwarzenegger',
    grades: [10, 70, 01, 77, 94, 47, 20, 04, 21, 61],
    showFullName() {
        this.fullName = `${this.firstName} ${this.lastName}`;
        console.log(`${this.fullName} ${this.grades}`)
    },
};

const student3 = {
    firstName: 'Bob',
    lastName: 'Collins',
    grades: [72, 48, 42, 44, 21, 03, 78, 81, 87, 47]
};
const student4 = {
    firstName: 'Lisa',
    lastName: 'Simpson',
    grades: [76, 31, 23, 71, 94, 40, 87, 76, 36, 87]
};
const student5 = {
    firstName: 'Rosa',
    lastName: 'Ponchik',
    grades: [18, 17, 68, 88, 99, 57, 89, 41, 64, 68]
};

console.log(`==================OBJECTS=================`);

console.log(student3.firstName + ` ` + student3.lastName);
student1.showFullName();
student2.showFullName();

const students = [student1, student2, student3, student4, student5];

//! MISSION: NEW ARRAY WITH JUST THE GRADES OF THESE STUDENTS
const grades = students.map((e,i,arr) => {
    return e.grades;
})
console.log(grades);