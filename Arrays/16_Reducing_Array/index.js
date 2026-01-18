const numbers = [1, -1, 2, 3];

// 1) start with accumulator, 
// 2) loop through array
// 3) convert all elements into value

// Reduced method results going through each function call
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => 0
// a = 0, c = 2 => 2
// a = , c = 3 => a = 5

// a = 1, c = -1
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum);
