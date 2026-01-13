const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};


// for - in loop
for (let key in circle)
    console.log(key, circle[key]);

// for - of loop
// Not work - of loops can only be used with arrays and maps
// not iterable
// for (let key of circle)
//     console.log(key);

// CORRECT WAY
for (let key of Object.keys(circle))
    console.log(key);


// Access all properties of object or method
// Returns everything as circle
for (let entry of Object.keys(circle))
    console.log(entry);

// checks if property in method exists
if ('radius' in circle) console.log('yes');