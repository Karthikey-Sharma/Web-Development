// Funtion expects arguments
/*
function add(a , b){// a and b are parameter
    //console.log(a + b)
    return (a + b)
}//function declaration

let sum = add(20 , 30) // function invocation // 20 and 30 are arguments
console.log('The sum is',sum)
console.log(add(50 , 90))

function sayHi(){
    console.log("hi")
}

sayHi()// function call
sayHi()
sayHi()
*/

// In JavaScript functions are known as first class citizen
// function variable ke andar bhi ban sakte hai
// You can treat functions as variables in JavaScript
/*
let sayHi = function(a){
    console.log(a)
}// anonymous function because function ka koi naam nhi hota

sayHi(2);
*/
// IIFE (immediately invoked function expression)
// Used when jab hame function ko sirf ek bar call krna ho 
// Ya mujhe immediately is function ka ans chahiye
/*
// This is also known as function expression //
let add = (function(a , b){
    return (a + b)
})(10 , 20)

console.log(add)
*/


