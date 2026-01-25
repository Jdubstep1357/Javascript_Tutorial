// Rest operator NOT spread operator
function sum(discount, ...prices) {

    let total = 0;

    console.log(prices) // Outputs total count of array

    // to get number of all numbers in array
    const totalamount = args.reduce((a, b) => a + b);
    return totalamount * (1 - discount); // output: 45 instead of 50

}

console.log(sum(0.1, 20, 30));

