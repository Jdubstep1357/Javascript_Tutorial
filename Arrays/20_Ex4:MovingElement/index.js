const numbers = [1, 2, 3, 4];

const output = moveBy(numbers, 0, 0);

console.log(output);
console.error('invalid');

// Ex: move(numbers, 1, -1)
// Output: [2, 1, 3, 4]

// index shows position, offset shows where you want to move array to
function move(array, index, offset) {

    // Showing error
    const position = index + offset;
    if (!position >= array.length || position < 0) {
        console.error('invalid offset');
        return;
    }

    const output = [...array];

    // clone array and then place it back at the right position
    // remove one item to access part of array
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;

}