const first = [1, 2, 3];
const second = [4, 5, 6];

// all elements of array returned individually
// exactly like [1,2,3,4,5,6]
const combined = [...first, 'a', ...second, 'b'];

// const copy = combined.slice();
// outputs all parts of array
const copy = [...combined];