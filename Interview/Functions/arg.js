// // JavaScript is a multiparadigm language
// // Means it follows both oops and functional programming

// function fn(param1 , param2) {
//     console.log("Inside fn" , param1 , param2)
// }
// /// if there is something -> default / if not then -> undefined
// // fn('Hello' , 'Hi')

// // fn('Hello')

// // fn()

// // fn('Hello' , 'Hi' , 'Bye')

function fn(){
    console.log(arguments)
}


fn('Hello' , 'Hi')

fn('Hello')

fn()

fn('Hello' , 'Hi' , 'Bye')
