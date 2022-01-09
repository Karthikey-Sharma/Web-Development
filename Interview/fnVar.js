function sayHi(name){
    console.log("My name is :->" , name)
    name()
}

function chotaFunction(){
    console.log("I am chota function")
}

// name Function
// console.log(sayHi)
// console.log(chotaFunction)

// console.log("Karthikey")

// I am passing a function definition
sayHi(chotaFunction)
