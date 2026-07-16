// exc 1
// print numbers 1-10 using a for loop
for (let counter=1;counter <= 10;counter++) {
    console.log(counter);
}

// exc 2    
// do exc1 in reverse 
for (let counter=10;counter > 0; counter--) {
    console.log(counter)
}

// exc3
// print only the even numbers from 2-20
for (let counter=2;counter <= 20;counter+=2) {
    console.log(counter);
}

// exc4
// use a while looop to print 1-5
let num = 1
while (num <= 5) {
    console.log(num);
    num++;
}

// exc5
// print the numbers 1-20 but skip 7 and stop when it hits 15
for (let counter=1;counter<=20;counter++) {
    if (counter === 7) {
        continue;
    } else if (counter === 15) {
        break;
    }
    console.log(counter);
}
