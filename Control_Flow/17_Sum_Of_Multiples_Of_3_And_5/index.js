console.log(sum(10));


// function returns all multiplse of 3 and 5 from 0  up to this limit
// Ex: What are multiples of 3 and 5 up to 10?

// Ex: Multiples of 3(3,6,9)
// Multples of 5: (5, 10)
// Output: 33

function sum(limit) {
    let sum = 0;

    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sum += i;

    return sum;
}