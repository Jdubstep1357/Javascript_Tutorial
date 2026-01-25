// give all values a value
function interest(principal, rate = 3.5, years = 5) {
    return principal * rate / 100 * years;
}


// Take 10k, add 3.5% interest, and pay it back over 5 years
console.log(interest(10000));