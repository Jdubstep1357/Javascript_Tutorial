// Objects - expressions that are key valued pairs

// OOP - object oriented programming
// Better way
// {} is object literal syntx
const circle = {
    //
    radius: 1,
    // object wiithin a object
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    // function inside object
    draw: function () {
        console.log('draw');
    }
};

circle.draw();
console.log(circle.radius);