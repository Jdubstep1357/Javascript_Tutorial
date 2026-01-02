// Falsey (false)
/* Ex:
undefined
null
0
false
''
Nan (Not a number)
*/

// Anyting that is not Falsey -> Truthy


// Real World Application:
/* 
A person choosing a color for a shirt
*/

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = useColor || defaultColor;

console.log(currentColor);