// 1.Function without return

// // function def -> where function is defined and its code is written in

// function sayHello(name){
//     console.log("name ->" , name)
// }
// // function invocation -> this line actually runs the code
// sayHello("Karthikey")
// //Haven't called the function -> it prints the name of function
// console.log(sayHello)

// //if you dont pass anything to the function
// //parameter is undefined
// sayHello()

//2. Functions With return value
function sayHello(name){
    console.log("Hello " , name)
    return "return from a function"
}

let rval = sayHello("Karthikey")
console.log(rval)
