// pass object and fuction displays all properties of object
// that are type string

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};

// Make output: title a
// director b
showProperties(movie); { }

function showProperties(obj) {
    // Output all properties that are strings
    // Create for loop that catches all parts of array
    for (let key in movie) {
        if (typeof movie[key] === 'string') {

            // ${ ... } (expression interpolation) 
            // `${key}`  is same as title or all other names

            // `${movie[key]}` is the name of the value of property 
            // whose name is stored in key

            // title - key / property name
            // 'a' - value
            // title: 'a' - key-value pair

            console.log(`${key}: ${movie[key]}`);
        }
    }
}