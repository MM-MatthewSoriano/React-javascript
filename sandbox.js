// // resolving arrow functions
// const person1 = {
//     nigga: "Matt",
//     sayHello () {
//         console.log(this.nigga);
//     },
//     sayBye: function () {
//         console.log(this.nigga);
//     },
//     sayNothing: () => {
//         console.log(person1.nigga);
//     }
// };

// person1.sayHello();
// person1.sayBye();
// person1.sayNothing();

// // IIFE
// (function() {
//     console.log("Hello");
// })();

// // CAllback
// setTimeout(function () {
//     console.log("Inside callback");
// },2000);

// // problem with regular functions in callbacks
// const out = {
//     name: "Matt",
//     person: {
//         sayHello: function() {

//             setTimeout(() => {
//                 console.log(this.name);
//             }, 3000);

//         }
//     }
// }

// callback
function greet(callback) {
    console.log("Hey");
    callback();
}

greet(() => {
    console.log("Bye");
});

// // promises
// const promise = new Promise((resolve, reject) => {

//     resolve("Success");

// });

// promise.then(result => {
//     console.log(result);
// });

const promise = new Promise((resolve, reject) => {

    reject("Error");

});

promise
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });


