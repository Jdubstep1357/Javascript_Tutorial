// Value Types - Primitives - number, string, boolean, symbol, undefined, null
// Reference Types - Object, function, array

let x = 10;
let y = x;


x = 20;

// Each variable is completely indepedent of each each other

// when use object, object is stored somewhere else in memory,
// stored somewhere else
// x1 and y1 are pointing to same place in memory
let x1 = { value: 10 };
let y1 = x;

x.value = 20;

/* --  ------ Major Takeaway ----------------
// primitives are copyied by their value
// objects are copied by their reference
*/

let number = 10;

function increase(number) {
    number++;
}

increase(number);
console.log(number);
// Output 10. number++ not adding due to primitive value

// OBJECT PART
let obj = { value: 10 };

function increase(obj) {
    obj.value++;
}

increase(obj);
console.log(obj);
// Output: {value: 11}