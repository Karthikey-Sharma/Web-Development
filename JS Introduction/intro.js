//console.log('Hello from the Node')
// variable declaration with let var and const
/*
var a;// First the variable is initialised with undefined
console.log(a)

a = 20
console.log(a)
// This implies Javascript is a synchronous language and a single threaded language

a = 'Hello'
console.log(a);
*/

// this says Javascript is dynamic 
// this is dynamic behaviour of javascript
// as variable ka data type assign nhi krna pdta

// var keyword ki problems

// First Problem with var - Redeclaration
// var allows redeclaration
/*
var b = 2
console.log(b)

var b = 'I am a string'
console.log(b)
*/

// Solution for redeclaration problem
// let redeclare krne ki permission nhi deta
/*
let b = 2
console.log(b)

let b = 'I am a string'
console.log(b)

*/

// Let Keyword does not allows us to redeclare a variable

// loops and if else

// Is Prime
/*

let flag = true;
var num = 13
for(let i = 2 ; i*i < num ; i++){
    if(num % i == 0){
        flag = false;
        break;
    }
}
if(flag == true){
    console.log('IsPrime',num)
}
else{
    console.log('NotPrime')
}
*/

// 2nd problem with var - Scooping
// Function Scooping and block scooping

/*
if(10 % 2 == 0){
    var c = 2;
    console.log(c);
}
console.log(c)
// this implies var is function scope
*/

// let isse bacha leta hai 
// let is blocked scope
/*
if(10 % 2 == 0){
    let c = 2;
    console.log(c);
}
console.log(c)
*/

// Const  - Isme reassign nhi kr skte

/*
const c = 2
c = 'hello'
console.log(c)
*/

/*
// this is also not allowed  // Jha declare krenge whi pe assign krenge 
// wrna undefined value assign ho jayegi const mein
const a ;
a = 'hello'
console.log(a)
*/

// ham shapat lete hain ki var ka use nhi krenge
// let ka use krenge
// let is blocked scope
// Environment - variables (let , var , const) , loops , if , else , problems of var done today

//  Strings -- ans String methods --

/*
let str = 'pepcoders'
console.log(str)
// string methods
//.length
console.log(str.length)

// extracting a part of string - 1.slice  2.substr
// slice(start , end)  // returns sliced array from starting index to end - 1
let slicedString = str.slice(3 , 7) // last index is included
console.log(slicedString)

// substr method
// substr (start , length) // length = jha tak ka output hme chahiye hoga

let subString = str.substr(3 , 4) // starting index and the length of the word
console.log(subString)

// replace method for string - // expects the word to be replaced as first argument and the replaced word as second argument

let sayHello = 'Hello Mukesh'
console.log(sayHello)

let sayBye = sayHello.replace('Hello' , 'Bye')
console.log(sayBye)

// toUpperCase and toLowerCase

let text1 = 'Hello World'
let text2 = text1.toUpperCase();
console.log(text2)
let text3 = text1.toLowerCase()
console.log(text3)

// Concatenation Method- 

let firstStr = 'Hello'
let secondStr = 'World !'

let concatinatedString = firstStr.concat(' ' ,  secondStr)
console.log(concatinatedString)

// Trim Method

let text = '    Hello World   '
let trimmedText = text.trim();
console.log(trimmedText)

*/

// let var const = let const superior kyu hai?  // Imp for interview

console.log(b)
