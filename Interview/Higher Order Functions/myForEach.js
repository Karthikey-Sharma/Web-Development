Array.prototype.myForEach = function(cb){
    for(let i = 0 ; i < this.length ; i++){
        cb(this[i])
    }
}
const array1 = ['a' , 'b'  , 'c' , 'd' , 'e' , 'f']

function printElem(element){
    console.log(element)
}

array1.myForEach(printElem)