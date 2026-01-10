
// Factory Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

// functions are objects
const Circle1 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    
    `);

// Calling method, {} is argument
Circle.call({}, 1);
// apply, but instead of passing all arguments explicity,
// pass in array
Circle.apply({}, [1, 2, 3]);

const circle = new Circle(1);

const another = new Circle(1);
