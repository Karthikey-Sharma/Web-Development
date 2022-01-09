let array = [ 1 , 2  , 3 , 4 , 5 , 6]

function squarer(x){
    return  x * x
}

function cuber(num){
    return num * num * num
}

// map implement -> Library implementation

// it takes function as an argument , arr 
// And returns a new function

function myMap(arr , cb){
    let newArray = []
    for(let i = 0 ; i < array.length ; i++){
        let ans = cb(arr[i])
        newArray.push(ans)
    }
    return newArray
}

let newArray = myMap(array , squarer)
console.log(newArray)
let cubeArray = myMap(array , cuber)
console.log(cubeArray)