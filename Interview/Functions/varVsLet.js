// // redeclare , reassign , function scope
// // you can access a var variable before Initialisation and even declaration

// console.log(a)
// var a
// a = 10
// var a
// console.log(a)

// before declaration let ka variable is in temporal dead zone(TMZ)
// temporal dead zone => You cannot access let before declaration
// can't redeclare it
// Let is a block scope meaning between {}
// console.log(a)
// let a 

var a
function fn(){
    console.log("Before Execution 24" , a)
    var a
    console.log("After Execution 26" , a)
    a = 20
    if(true){
        let a = 30
        console.log("30" , a)
    }
    console.log("After Initialisation 32" , a)
}
a = 10
fn()




