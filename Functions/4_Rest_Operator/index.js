
// ...args is rest operator NOT spread operator
// rest operator must be last parameter in ()
function sum(discount, ...prices) {


    // we can pass things to args which will put it in array
    console.log(prices); // Outputs array of 6 elements

    // get sum of all numbers in array use reduce
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);

}

console.log(sum(0.1, 20, 30));