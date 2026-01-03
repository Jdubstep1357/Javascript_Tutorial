// Write a function that takes 2 numbers and returns
// the maximum of the two

let a = 3;
let b = 10;

if (a > b) console.log(a);
else if (b > a) console.log(b);
else console.log("error");


let number = max(5, 10);
console.log(number);

function max(a, b) {
    // if (a > b) console.log(a);
    // else return b;


    // conditional operator - same as above
    return (a > b) ? a : b;
}