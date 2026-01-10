

// Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);


// Constrcutor Function - use pascal notation
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);

// Constructor references function to create object
// every object has a function property that refereces function
// that created object
// Let x = new Object();
let x = {}

new String();
new Boolean();
new Number();