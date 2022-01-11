// Hoisting -> Memory Allocation -> Js Functions
// Memory for the functions are allocated before the code is executed
// functions are created in heap memory
// there addreses is stored in stack 
// There is no function overloading in JS
console.log('script started')

iAmReal()

function iAmReal(){
    console.log('I am real')
}

function iAmReal(){
    console.log('He isnt , I am real')
}
iAmReal()

