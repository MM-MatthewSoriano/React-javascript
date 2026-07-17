// exc 1
// create an object named person with the properties: name, age, city

const person = {
    name: "Matt",
    age: 22,
    city: "Pasay"
}

console.log(person);

// exc 2
// print name and city only from the same object

console.log(person.name);
console.log(person.city);

// exc 3
// add a new property job
person.job = "CEO";
console.log(person);

// exc 4
// delete the pages property 
const book = {
    title: "Clean Code",
    author: "Robert C. Martin",
    pages: 464
}

delete book.pages;
console.log(book);

// exc 5
// create an array of objects and print contents using a loop
const students = [
    {
        name: "Matt",
        grade: 99
    },
    {
        name: "John",
        grade: 100
    },
    {
        name: "James",
        grade: 98
    }
]

for (let counter = 0; counter < students.length; counter++) {
    console.log(`${students[counter].name} - ${students[counter].grade}`)
}

// challenge question
// You access the user object property hobbies then access the array index 1, resulting to Gaming