


// Factory Function
function createCircle(radius) {
    return {
        // same as radius: radius
        radius,

        // same as draw: function() { }
        draw() {
            console.log('draw');
        }
    };
}

// factory function draw stays same even if multiple radius

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);