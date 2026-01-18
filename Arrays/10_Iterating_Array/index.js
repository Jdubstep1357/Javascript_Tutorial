const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number);

// for each method
// also display index of each placement
numbers.forEach((number, index) => console.log(index, number));