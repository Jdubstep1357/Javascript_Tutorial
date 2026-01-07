console.log(sum(10));


// function returns all multiplse of 3 and 5 from 0  up to this limit
// Ex: What are multiples of 3 and 5 up to 10?

// Ex: Multiples of 3(3,6,9)
// Multples of 5: (5, 10)
// Output: 33

function sum(limit) {
    let a = 0;
    let b = 0;

    // Make a for loop for multiples of 3
    // how to multiply loop by adding 3 instead of 1
    for (let i = 0; i <= limit; i += 3) {
        a += i;
        console.log("Multiple of 3: " + a);
    }

    // Make a for loop for multiplse of 5
    for (let i = 0; i <= limit; i += 5) {
        b += i;
        console.log("Multiple of 5: " + b);
    }

    // 
    console.log("Combined multiples of 3: " + a);
    console.log("Combined multiples of 5: " + b);

    // Final Answer
    console.log("Multiple of 3 and 5 combined: " + (a + b));
}