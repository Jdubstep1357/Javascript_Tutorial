// Functions - set of statements that perform a task or calculates a value



// name is only accessible inside of function
function greet(mainName, lastName) {
    // Body of function

    mainName = "Harry";
    lastName = "Smith"

    console.log("Hello John " + mainName + " " + lastName);
}

// Runs function
// mainName is parameter at time of declaration
// "John" is an argument

// Argument function
greet("John", "Smith");
greet(mainName, lastName);