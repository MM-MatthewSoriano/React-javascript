// exc 1
// A
// C
// B

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 1000);

// console.log("C");

// exc 2
// create a promise that immediately resolves with Learnig javascript

// const promise = new Promise((resolve,reject) => {
//     resolve("Learning Javascript!");
// });

// promise.then(result => {
//     console.log(result);
// });

// exc 3
// create a promise that immediately rejects with something went wrong

const promise = new Promise((resolve,reject) => {
    reject("Something went wrong!");
});

promise.catch(error => {
    console.log(error);
});

// exc 4
// write an async function that prints "Hello Async"
async function sayHello() {
    return "Hello Async";
}

sayHello().then(result=>{
    console.log(result);
});

// exc 5
// without changing the function explain:
// Why .then() works here.
// What the output is.
// .then() retrieves the result from the promise that was the output of the async function
// 20

async function getNumber() {
    return 10;
}

getNumber().then(number => {
    console.log(number * 2);
});

// challenge question
// explain why the output is different
// console.log directly returns the result right away while setTimeout has to check for the time condition first before it can run the callback function and return the result 

console.log("Start");

setTimeout(() => {
    console.log("Middle");
}, 0);

console.log("End");





