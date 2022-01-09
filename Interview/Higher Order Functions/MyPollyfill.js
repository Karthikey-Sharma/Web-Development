Array.prototype.MyEvery = function(cb){
    for(let i = 0 ; i < this.length ; i++){
        if(cb(this[i]) == false){
            return false
        }
    }
    return true
}

Array.prototype.mySome = function (cb){
    for(let i = 0 ; i < this.length ; i++){
        if(cb(this[i]) == true){
            return true
        }
    }
    return false
}

Array.prototype.myFindIdx = function(cb){
    for(let i = 0 ; i < this.length  ; i++){
        if(cb(this[i]) == true){
            return i
        }
    }
    return true
}

let array2 = [1 , 2 , 3 , 4 , 5 , 6 , 30 , 39 , 13 , 40]

function isBelowThreshold(currentValue){
    return currentValue < 40
}
console.log(array2.MyEvery(isBelowThreshold))


const array = [1 , 2 , 3 , 4 , 5 ]

// checks whether an element is even

function even(element){
    return element % 2 == 0
}
console.log(array.mySome(even))


const array1 = [5 , 12 , 8 , 130 , 44]
function isLargeNumber(element){
    return element > 13
}
console.log(array1.myFindIdx(isLargeNumber))