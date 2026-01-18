const first = [1, 2, 3];
const second = [4, 5, 6];
const object = [{ id: 1 }];

// changes id to 10
first[0].id = 10;

// primitive - copied by vales
// reference types - copied by reference

// contact - combines arrays
const combined = first.concat(second);

// opposite of concat - breaks up array
const slice = combined.slice(2, 4);

// Get all elements of array starting at given index
const slice_All = combined.slice(2);


console.log(combined);
console.log(slice);
console.log(slice_All);