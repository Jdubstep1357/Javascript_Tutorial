
const numbers = [1, 2, 3, 4];

// adds to end of array
// End 
numbers.push();
// Deletes
const last = numbers.pop();
console.log(numbers);
console.log(last);

// adds in middle of array
// Begining
numbers.unshift();
// Deletes
const first = numbers.shift();
console.log(numbers);
console.log(first);

// adds somewhere in middle of array
// Middle
numbers.splice();
// Deletes number 3
numbers.splice(2, 1);
// to delete more than one element ie: 2
numbers.splice(2, 2);
