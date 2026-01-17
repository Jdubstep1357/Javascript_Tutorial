const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

// makes false
// console.log(courses.includes({ id: 1, name: 'a' }));

// callback function
const course = courses.find(function (course) {
    return course.name === 'a';
});

// displays index of referenced course. will return -1 if undefined
const courseIndex = course.findIndex(function (course) {
    return course.name === 'a';
})

console.log(course);