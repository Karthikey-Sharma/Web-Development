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

Array.prototype.myMap = function myMap(cb){
    let newArray = []
    for(let i = 0 ; i < this.length ; i++){
        let ans = cb(this[i])
        newArray.push(ans)
    }
    return newArray
}

let newArray = array.myMap(squarer)
console.log(newArray)
let cubeArray = array.myMap(cuber)
console.log(cubeArray)


