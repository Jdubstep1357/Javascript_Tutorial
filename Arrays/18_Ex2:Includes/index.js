const numbers = [1, 2, 3, 4];

// write function like includes method
// implement method yourself


// Create function that takes array and a search element
// if search element is in array true, otherwise false


// checcks if number is in array
console.log(numbers.includes(1));


const array = [2, 3, 4];


function includes(array, searchElement) {

    // make a forloop to loop through it
    for (let element of array)
        if (element === searchElement)
            return true;
    return false
}

console.log(includes(numbers, 9))

