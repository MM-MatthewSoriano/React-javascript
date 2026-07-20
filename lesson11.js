// exc 1
// change the element text using javascript

const title = document.getElementById("title");
title.textContent = "Hello Humans!";

// exc 2
// using the same element, change its color
title.style.color = "#0000FF";

// exc 3
// create a button that logs in the console when clicked
const button = document.getElementById("btn");
const result = button.addEventListener("click",()=>{
    console.log("Button Clicked!");
});

// exc 5
// create 3 li elements apple banana orange and append all three to the list

const list = document.getElementById("list");
const fruits = ["apple","banana","orange"];
fruits.forEach(fruit => {
    const li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
    console.log(li.textContent);
});

// exc 4
// create a paragraph with document.createElement

const newParagraph = document.createElement("p");
newParagraph.textContent = "I created this with JavaScript.";
document.body.appendChild(newParagraph);

// challenge question:
// 1-javascript access the element by id,2-dom will change the text of the element to welcome,3-browser will load it

