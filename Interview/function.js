// function definition
function sayHi(name){
    console.log("my name is :-" , name)
    // return kuch bhi kar skte hai 
    // array , object , string (basically anything)
    // but the crux is we can only return only one thing
    //return {firstName : "Karthikey"}
    // return "Hi Bro"
    // return 2
    // return [2 , 3 , 4 , 5]
    // if nothing is return rval undefined aati hai 
   // return [20 , 30 , 49 , "karthikey" , "Anything" , [2 , 4 , ] , {lastName : "Sharma"}]
}
// function only runs when it is called
// let rval = sayHi("Karthikey Sharma")
// console.log("Rval Is " , rval)

let arr = [10 , 20 , 30 , 40 ]
let obj = {firstName : "Karthikey"}

// function is also a variable 
function chotaFunction(){
    console.log("I am chota function")
}
//Number
sayHi(10)
//String
sayHi("Hello")

// reference type - ye dono ka address pass hota hai ye khud pass nhi hote
// array
sayHi(arr)
//Object
sayHi(obj)
// function
sayHi(chotaFunction)
