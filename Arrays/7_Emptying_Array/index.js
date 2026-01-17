let numbers = [1, 2, 3, 4];
let another = numbers;

// Solution 1
// reassign to new array
numbers = [];

// Solution 2
numbers.length = 0;

// Solution 3 - Splice
numbers.splice(0, numbers.length);

// Solution 4
while (numbers.length > 0)
    numbers.pop();

console.log(numbers);
console.log(another);