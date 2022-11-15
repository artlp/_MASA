class Person {
    constructor(firstN, lastN, birthD){
        this.firstName = firstN;
        this.lastName = lastN;
        this.birthDate = birthD;
    }
    calcAge() {
    const currentDate = new Date();
    return this.age = currentDate.getFullYear() - this.birthDate.getFullYear();
    }
    getEyeColor() {
        this.eyeColor = 'Green';
    }

}


//* example of usage of constructor
const currentDate = new Date();
const otherDate = new Date('2000-2-20')
const John = new Person("John", "Smith", new Date('1953-11-17'))
John.calcAge();
John.getEyeColor();
console.log(John);