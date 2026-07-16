// exc 1
// create a function named sayHello that returns Hello Javascript

function sayHello() {
    console.log("Hello, Javascript!")
}
sayHello();

// exc 2
// create a function named greet that accepts a name parameter
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Matt");

// exc 3
// create a function that can multiply 2 arguments
function multiply(num1,num2) {
    return (num1*num2);
}
const product = multiply(25,25);
console.log(product)

// exc 4
// create a function that can check an age if its an adult

function isAdult(age) {
    if (age >= 18) {
        return "Adult";
    }
    return "Minor";
}

console.log(isAdult(21));
console.log(isAdult(17));

// exc 5
// create an arrow function named calculateArea

const calculateArea = (length,width) => {
    return length * width;
}
const area = calculateArea(10,5);
console.log(area);

// challenge question
// 10
