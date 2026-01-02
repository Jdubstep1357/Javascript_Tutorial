// Bitwise operators

// 1 = 000000001
// 2 = 000000002
// 3 = 000000011
// R = 000000000

// | represents one bitwise or
console.log(1 | 2) // Bitwise OR
console.log(1 & 2); // Bitwise AND


// Real World Example:

// Implement Access Control System
/* 
User can have permission: Read, Write, Execute
*/

// Read, Write, Execute
// 00000100
// 00000010
// 00000001


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;

// check to see if you have permission
let message = (myPermission & readPermission) ? 'yes' : 'no';

console.log(message);