// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Uses camel notation
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
    // this - references object that is executing code
    this.radius = radius;

    this.draw = function () {
        console.log('draw');
    }
}

// new - 1) creates empty javascript object ie: x = {}
// new - 2) sets this to point to new empt object
// new - 3) operator returns new object from function ie: return this
const circle = new Circle(1);