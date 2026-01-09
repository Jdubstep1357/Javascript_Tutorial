// const means we cannot reassign variable, but we can modify it
const circle = {
    radius: 1
};

// Adds to the const circle
circle.color = 'yellow';
circle.draw = function () { }

// delete parts of circle
// delete circle.color;
// delete circle.draw;

console.log(circle);