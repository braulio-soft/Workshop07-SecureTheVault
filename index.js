 
/*
Pseudocode 
1. Set message for users .
2. Assign 3 variables that are calculations using unique operators +*-/
3. Create html file and add script to link your js file . 
4. Add funciton alert to generate dialog box .
5. Create a new repo and link your code .  

*/

// User Message 
const message = "You have received this message because you have been chosen to open an important vault.Here is the secret combination:"

// Set Secret Code 1 
const secretValue1 = 12 + 17;
// Set Secret Code 2 
const secretValue2 = 100 * 5;
// Set Secret Code 3 
const secretValue3 = 200 - 50;

//Returns values in console to verify codes .
console.log(secretValue1);
console.log(secretValue2);
console.log(secretValue3);

//Alert to returns message and code values .
alert(`${message} ${secretValue1}-${secretValue2}-${secretValue3}`);