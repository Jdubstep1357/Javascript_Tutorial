let address = new Constructor_Function('a', 'b', 'c');

// Initialize an address object
// Using a factory function, then constructor function

// 2 functions
// Use factory function, then constructor function

function Factory_example(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
};

console.log(Factory_example("19 Madison St", "Amesbury", "01913"));


function Constructor_Function(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

const Answer1 = Constructor_Function(address);
console.log(address);