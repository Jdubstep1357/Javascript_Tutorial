// Makes new line
const message =
    'This is mmy\n' +
    '\'first\' message';

// Object {}
// Boolean, true, false
// String '', ""
// Template literal ``

// Same as above - format string exactly as you want it
const another =
    `This is my
first message`;

const name_main = 'John'
// Old Way
const message2 = `Hi ` + name_main + ',\n';

// New Way
const templateLiteral = `Hi ${name_main} ${2 + 3}`;
