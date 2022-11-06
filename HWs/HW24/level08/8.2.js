const John = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1995,
    familyMembers: ['Mary', 'Jack', 'Richard', 'Margaret'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        let currDate = new Date();
        return currDate.getFullYear() - this.birthYear;
    },
    calcFamilyMembers: function () {
        return this.isMarried === true ? this.familyMembers.length +1 : this.familyMembers.length;
    }
};


/* a) Make method John.marryJohn - after it runs, John becomes married */
John.marryJohn = function () {
    this.isMarried = true;
};
John.marryJohn();
/* b) Add two properties: birthMonth and birthDay.
   Fix the method John.calcAge to return the right age when the birthday yet not 
   occured this year */
John.birthDate = new Date(`Apr 17, 1962`);
John.birthMonth = John.birthDate.getMonth();
John.birthDay = John.birthDate.getDate();
// c) /*    Go over newProperties and create new properties for "John" object - assign them values from "values" */
const newProperties = ['favouriteColor', 'favouriteFood', 'hobbies', 'salary'];
const values = ['blue', 'sushi', ['ski', 'knitting', 'speleology', 'riddles'], 16000];
John.newKeys = function newKeys() {
    newProperties.forEach((key, i) => {
        this[key] = values[i];
    });
};
//   console.log(John.newKeys());
John.newKeys();



/* d) Create method addHobby which adds a hobby depending on John's job. If he's a
   teacher, it adds "reading", if a developer, it adds "running", if a cook (chef),
   it adds "sculpture", for any other job - "playing guitar". */
John.addHobby = function addHobby() {
    switch (this.job) {
        case "teacher":
            this.hobbies.push("reading");
            break;
        case "developer":
            this.hobbies.push("running");
            break;
        case "cook":
        case "chef":
            this.hobbies.push("sculpture");
            break;
        default:
            this.hobbies.push("playing guitar");
            break;
    }
};
John.addHobby()

/* e) Fix method marryJohn - it shoud fix John.calcFamilyMembers() - as there is one 
   more family member now */
   console.log(John);
   
   console.log(John.calcFamilyMembers());