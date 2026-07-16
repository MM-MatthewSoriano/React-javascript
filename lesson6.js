// exc 1
// array containing 5 programming langs

let lang_array = ["python","javascript","bash","php","c++"];
console.log(lang_array)

// exc 2
// print first and last element, use .length for the last one

console.log(lang_array[0])
console.log(lang_array[lang_array.length - 1])

// exc 3
// add colors to an existing colors array

const colors = ["red","blue"];
colors.push("green");
colors.unshift("yellow");
console.log(colors)

// exc 4
// remove first and last animals

const animals = ["Dog","Cat","Bird","Fish"];
animals.shift();
animals.pop();
console.log(animals);

// exc 5
// create an array of 5 numbers and use a for loop to print every number

const numbers = [1,2,3,4,5];
for (let counter=0;counter<numbers.length;counter++) {
    console.log(numbers[counter]);
}

