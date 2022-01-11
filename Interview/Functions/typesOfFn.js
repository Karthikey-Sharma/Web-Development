//Function definition
function fn(param){
    console.log('I am a function definition' , param)
    // execute chota function
    param()
}

// // Boolean -> value
// fn(true)
// //Adress 
// // This implies ye pass by refernce hote hai
// // Function bhi pass by reference hota hai
// // String -> referene type
// fn('Hello')
// // Object
// let obj = {name : "Karthikey"}
// fn(obj)
// // array
// let arr = [10  , 20 , 30 , 40 , 50 , 60]
// fn(arr)
//Functions are also variables
//=>functions are first class citizens in JS
function chotaFunction(){
    console.log("Hello I am a chota function")
}

// function can also be passed as an argument in function
fn(chotaFunction)