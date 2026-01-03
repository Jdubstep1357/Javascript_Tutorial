// if number divisable by 3, fizz
// number divisiable bu 5 buzz
// divisable by 3 and 5 fizz buzz
// if not divisable by 3 or 5 same input
// if not passed as a number string or boolean, not a number

const output = fizzBuzz(3);
console.log(output);

function fizzBuzz(input) {
    let a = input % 3 === 0;
    let b = input % 5 === 0;
    let c = input % 3 === 0 && input % 5 === 0;


    if (typeof input !== 'number') return "Not a number";

    if (c) return "FizzBuzz";
    else if (b) return "Buzz"
    else if (a) return "Fizz"
    // else if (input % 3 !== 0 || input % 5 !== 0) return input



    // fizzbuzz
    else return "Not a number";

}