// // //1. Functions are varibles
// // function outer(param) {
// //     console.log(param)
// // }

// // function chotaFunction(){
// //     console.log("Hello I am a chota function")
// // }
// // // Function can be passed to another function
// // outer(chotaFunction)

// // //2. can be passed as a parameter to another function -> higher order function

// // // function's reference can be stored in another variable
  
// // let a = [1 , 3 , 4 , 5]
// // let b = a
// // // function expression
// // let anotherName = function(){
// //     console.log("i am an expression")
// // }
// // anotherName()

// // 3. function return from a function
// function fn(){
//     return "hello"
// }

// let rval = fn()
// console.log(rval)

function outer(){
    console.log("Hello i am outer and i am returning Inner")
    return function inner(){
        console.log("I am Inner!")
    }
}

let rval = outer()
console.log(rval)
rval()
