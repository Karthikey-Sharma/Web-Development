// These functions are available on arrays
// lodash -> It is a library
// These Functions came from this library
// It doest not change the origional array

let array = [ 1 , 2  , 3 , 4 , 5 , 6]

function squarer(x){
    return  x * x
}

function cuber(num){
    return num * num * num
}

// let ans = squarer(array[0])
// console.log(ans)
// ans = squarer(array[1])
// console.log(ans)
// ans = squarer(array[2])
// console.log(ans) 

let squaredArray = array.map(squarer)
console.log("Squared Array :-> " , squaredArray)

let cuberArray = array.map(cuber)
console.log("Cubed array :->" , cuberArray)

console.log(array)