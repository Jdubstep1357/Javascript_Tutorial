const numbers = [1, 2, 3, 4];

// takes 2 array with values we want excluded
const output = except(numbers, [4]);

console.log(output);



function except(array, excluded) {
    const output = [];

    // for each element see if this element in other array. if 
    // not add it into new array

    for (let element of array)
        if (excluded.includes(element))
            output.push(element);
    return output;

}


// TASK:
// Takes array and add value that is excluded 
// from original array


