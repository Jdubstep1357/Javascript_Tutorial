const numbers = [3, 4];

// End
numbers.push(5, 6);



// Begining
// pushes elements in arra to the right, and
// adds new elements in the beginning
numbers.unshift(1, 2)


// Add elements to middle of array
//  2 is position, 0 is how many deleted, a and b are added
numbers.splice(2, 0, 'a', 'b')

// Middle of Array
console.log(numbers);

