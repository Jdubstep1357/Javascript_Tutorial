let address1 = new Address('a', 'b', 'c');
let address2 = new Address('a', 'b', 'c');

function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}


console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));

// Create 2 functions
// check to see if objects are equal


function areEqual(address1, address2) {
    // check thier properties that all properties are equal
    // if all equal, return true, otherwise return false

    // check if properties are equal
    return address1.street = address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;

}


function areSame(address1, address2) {
    // if addresses are referemcomg same object or not
    return address1 === address2;
}

