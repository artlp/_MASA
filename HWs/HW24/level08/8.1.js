/* Level 8.1
a) See the example of creating an object */
const HaifaUniver = {
    
    name: "Haifa University",
    
    site: "https://www.haifa.ac.il/",
    
    location: "sderot Aba Hushi, 199, mt. Carmel, Haifa",
    
    faculties: ['Humanities', 'Social Sciences', 'Law', 'Science and Science Education'],
    
    rector: undefined,

    studentsByDegrees: {
       Bachelor: 8500,
       Master: 8500,
       Doctor: 1000
    },
    
    addFaculty: function(newFaculty) {

       this.faculties.push(newFaculty);
       
    }

}

HaifaUniver.dateOfCreation = new Date('1972-03-01');

HaifaUniver.president = 'Ron Robin';

HaifaUniver.rector = "Gustavo Mesch";

HaifaUniver.showYearOfCreation = function() {

   console.log(`${this.name} was created in ${this.dateOfCreation.getFullYear()}`);

  }

HaifaUniver.addFaculty('Education');

HaifaUniver.showYearOfCreation();

console.log(HaifaUniver);

const JaneSmith = {
   firstName: "Jane",
   lastName: "Smith",
   occupation: "dentist",
   eyeColor: "green",
   hairColor: undefined,
   showColors: function() {
      console.log(`${this.firstName} ${this.lastName} has ${this.eyeColor} eyes and ${this.hairColor} hair`);
   },
}

JaneSmith.hobbies = [`swimming`, `hiking`,`reading`];
JaneSmith.dateOfBirth = new Date('1990-01-20');
JaneSmith.hairColor = "black"

JaneSmith.showColors()
JaneSmith.age = function() {
   let today = new Date().getFullYear();
   let bday = this.dateOfBirth.getFullYear()
   return (today - bday);
}
console.log(JaneSmith.age());
JaneSmith.familyMembers = {
   Bob:34,
   Steve:28,
}

console.log(JaneSmith);
