// 1st object
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


// const another = {};
// for (let key in circle)
//     another[key] = circle[key];

// For loop same as this
// another['radius'] = circle['radius'];


// 2nd object - where cloned data sent
// obect.assign copies properties and methods from 1 or more
// into target object
const another_first = Object.assign({
    color: 'yellow'
}, circle);



// Spread operator - most eloquet way to clone objects
const another = { ...circle };
console.log(another);