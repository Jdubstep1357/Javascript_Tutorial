const numbers = arrayFromRange(-10, -1); u
console.log(numbers);

function arrayFromRange(min, max) {
    // takes 2 parameters: min and ax
    // when run display array with numbers from 1 thru 5
    // if add -10 and -4 output is [-10, -9, -8, -7, -6, -5 -4]

    const output = [];

    for (let i = min; i < max; i++) {
        output.push(i);
    }
    return output;

}