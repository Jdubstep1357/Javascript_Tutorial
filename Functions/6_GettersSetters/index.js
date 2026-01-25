const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    // define function outside of object
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

};



person.fullName = 'John Smith';


// getters => access properties in object
// setteres -> change or mutate them

console.log(person);