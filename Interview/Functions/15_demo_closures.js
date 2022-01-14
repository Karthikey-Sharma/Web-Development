// function powerCreator(exp) {
    // if(typeof exp != 'number'){
    //     console.log('Expression must be a number')
    //     return null
    // }
//     let fun = function (base) {
//         let rv = Math.pow(base , exp)
//         return rv
//     }
//     return fun
// }

// let squarer = powerCreator(2)
// let value = squarer(8)
// console.log(value)

// change power creater 
// to make it a producer of such functions are
// whose exponent we can change on a later date

function powerCreator(obj) {

    if(typeof obj.exp != 'number'){
        console.log('Expression must be a number')
        return null
    }

    let fun = function (base) {
        let rv = Math.pow(base , obj.exp)
        return rv
    }
    return fun
}

let o1 = {
    exp : 2
}

let squarer = powerCreator(o1)
let value = squarer(8)
console.log(value)

o1.exp = 3
let cuo8 = squarer(8)
console.log(cuo8)