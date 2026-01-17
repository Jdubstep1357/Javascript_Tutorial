const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];


// original 
const course = courses.find(function (course) {
    return course.name === 'a';
});

// arrow function
const course_ArrowFunc = courses.find(course => course.name === 'a');



console.log(course);