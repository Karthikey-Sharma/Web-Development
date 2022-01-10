
let arr = [1 , 2 , 3 , 4]

function sum(storage , element ){
    return storage + element
}
function product (storage , element ){
    // console.log("storage->" , storage , "elem" , element)
    return storage * element
}


// 1st Case -> Without Initial Value of storage -> storage = arr[0]
//Examples ->
let finalProduct = arr.reduce(product)
console.log(finalProduct)

let finalSum = arr.reduce(sum)
console.log(finalSum)

// 2nd Case -> Provided initial value storage = that provided value
//Examples ->
let finalProduct2 = arr.reduce(product , 10)
console.log(finalProduct2)




