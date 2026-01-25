// function declaration
function walk() {
    console.log('walk');
}

// anonymous function expression - set function to object
let run = function walk() {
    console.log('run');
};

let move = run();

// move is same as run
run();
move();