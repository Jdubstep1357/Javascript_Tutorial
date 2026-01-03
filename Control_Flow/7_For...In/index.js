// for-in loop

const person = {
    name: 'Mosh',
    age: 30
};

// Dot notation
// person.name

// bracket notation
// person['name']



// Holds name of one of the properties in the object
for (let key in person)
    console.log(key, person[key]);

const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);

// for-of