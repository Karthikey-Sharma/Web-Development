///This code runs in Global Execution Context
console.log("Before Execution 2" , a)
var a
console.log("After Execution 4" , a)
a = 10
console.log("After Initialisation 6" , a)


// next Question -> tell the outputs 

function fn(){
    console.log("Before Execution 12" , a)
    var a
    console.log("After Execution 14" , a)
    a = 20
    console.log("After Initialisation 16" , a)
}
fn()

