// exc 1
// use .filter() to keep numbers greater than 10

const numbers = [5,10,15,20,25,30];
const aboveTen = numbers.filter(number => number > 10);
console.log(aboveTen);

// exc 2
// use .find() to find john

const users = [
    { name: "Matt"},
    { name: "John"},
    { name: "Jane"}
]

const john = users.find(user => user.name === "John");
console.log(john);

// exc 3
// use .some() to check if at least one score is above 75

const scores = [30,45,70,80];
const someAbove75 = scores.some(score => score > 75);
console.log(someAbove75);

// exc 4
// check if all scores are at least 50

const newScores = [80,90,100];
const allAre50 = newScores.every(score => score >= 50);
console.log(allAre50);

// exc 5
// calculate the total price using .reduce();
const prices = [100,250,300,50];
const totalPrice = prices.reduce((total,price) => total + price, 0);
console.log(totalPrice);

// challenge question
// 1.create the list and objects with name and active keys
// 2.create a new constant activeUsers 
// 3.using filter function filter the users list and return the values to activeUsers that matches object properties that are active
// 4. log the length of activeUsers which is probably 2