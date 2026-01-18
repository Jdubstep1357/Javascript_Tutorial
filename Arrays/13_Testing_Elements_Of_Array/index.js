const numbers = [1, 2, 3];

// 3 parameters: value, index, array
const allPositive = numbers.every(function (value) {
    // as soon as element doesnt match criteria, stop searching
    // check if value is positive number
    return value <= 0;
});


const atLeastOnePositive = numbers.some(function (value) {
    // as soon as element doesnt match criteria, stop searching
    // check if value is positive number
    return value >= 0;
});


// every() - checks if every elements matches criteria
// some() - checks if at least one element that matches


console.log(allPositive);
console.log(atLeastOnePositive);