// Child process is a node module used to create a subprocess within 
//a script to perform different tasks.

let cp = require('child_process')
/*
console.log('Trying to open calculator')
cp.execSync('calc') // execSync is a child process method to exeute files
console.log('calculator opened')
*/
/*
console.log("Trying to open vs code")
cp.execSync('code')
console.log('Vs code opened')
*/
/*
cp.execSync('start chrome')
*/

//cp.execSync('start chrome https:\\ www.pepcoding.com')

let output  = cp.execSync('node text.js')
console.log("Output is :- " + output) // We can concatenate with empty string as well
