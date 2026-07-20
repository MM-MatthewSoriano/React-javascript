// exc 1
// use object destructuriing to create variables

const person = {
    name: "Matt",
    age: 22
}

const {name,age} = person;

console.log(name);
console.log(age);

// exc 2
// use array destructuring to store first and second elements

const fruits = ["Apple","banana","orange"];
const [first,second] = fruits;
console.log(first);
console.log(second);

// exc 3
// use the spread operator to create a new array

const numbers = [1,2,3];
const newNumbers = [...numbers,4];
console.log(newNumbers);

// exc 4
// create a function greet that can print Hello guest when no argument is provided and can also print otherwise
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}
greet();
greet("Matt");

// exc 5
// use map to add 5 to every score

const scores = [60,70,80,90];
const newScores = scores.map(scores => scores + 5);
console.log(newScores);

// challenge question
// create an object person with properties name, use object deconstruction to initialize a constant age and store the property value, print the age = 22