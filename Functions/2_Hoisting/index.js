// Hoisting - process of moving function declarations to top of file



function walk() {
    console.log('walk');
}

// function declaration - works
walk();

// function expression - DOES NOT work. must be below const run
run();

const run = function () {
    console.log('run');
}

