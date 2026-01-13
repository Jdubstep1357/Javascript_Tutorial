// Create an address objects with 3 properties:
// 1. Street
// 2. City
// 3. Zip Code

// Create function showAddress that takes an address object
// and displays all the properties in object along
// wit value

let Address = {
    street: '123 Cherry Lane',
    city: 'HappyLane',
    zip: 154689
};

function showAddress_original() {
    console.log(`
        Street: ${Address.street}
        city: ${Address.city}
        zip: ${Address.zip}
        `)
};

// Correct way to do with loop
function showAddress(x) {
    for (let key in x) {
        console.log(key, x[key])
    }
};

showAddress(Address);