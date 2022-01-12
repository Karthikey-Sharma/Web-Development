
function f() {
    console.log(arguments)
}

function f(a , b) {
    return a + b
}

console.log(f(2 , 3 , 4 , 5))

function f(x , y , z , t){
    return  x + y +z +t
}

console.log(f(2 ,3 ,4 , 5))

// Ans is 14 because memory allocation of function is done first and
// And then the code is executed in JS

