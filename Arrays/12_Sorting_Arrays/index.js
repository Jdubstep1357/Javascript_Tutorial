const numbers = [2, 3, 1];
// converts each element to a string and sorts array
numbers.sort();
console.log(numbers);

// reverse the order of element in array
numbers.reverse();
console.log(numbers);



const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'Javascript' }
];

courses.sort(function (a, b) {
    // a < b => -1
    // a > b => 1
    // a === b => 0

    // ensures all numbered letters are working correctly
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();

    if (nameA < nameB) return - 1;
    if (nameB > nameA) return 1;
    return 0;

});

console.log(courses);