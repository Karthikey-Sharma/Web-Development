let fs = require('fs')
/*
function printFirstName(firstName , cb){
    console.log(firstName)
    cb("Sharma")
}

function printLastName(lastName){
    console.log(lastName)
}

printFirstName("Karthikey" , printLastName)

*/

//Any function that is passed as an argument to another function
// Any function that is called after a function has finished execution


//Synchronous way of reading file
/*
console.log('before')
let data = fs.readFileSync("f1.txt")
console.log("" + data)
console.log('after')
*/

//Asynchronous way of reading file

console.log('before')

fs.readFile("f1.txt" , cb)
//error first call backs
function cb(err , data){
    if(err){
        console.log(err)
    }
    console.log("" + data)
}

console.log('after')