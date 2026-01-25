const numbers = [1, 2, 3, 4];

// returns largest number in array


const max = getMax(1, 2, 2, 1, 3);

console.log(max);

function getMax(array) {
    if (array.length === 0) return undefined;

    // let max = array[0];
    // // if we find variable larger than length of array reset
    // for (let i = 1; i < array.length; i++)
    //     max = array[i];
    // return max;


    // reduce loops through the array and keeps accumulating
    array.reduce((a, b) => {
        // if b is less than a, return b, otherwise return a
        // ? means is this condition true
        // : is same as else
        return (b < a) ? b : a;
    });

}