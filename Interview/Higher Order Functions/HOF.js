// Higher order functions are functions that recieve
//function as an argument or a function that recieves 
// a function

// const array1 = ['a' , 'b'  , 'c' , 'd' , 'e' , 'f']

// function printElem(element){
//     console.log(element)
// }

// array1.forEach(printElem)

// ****************every************************
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value
let array2 = [1 , 2 , 3 , 4 , 5 , 6 , 30 , 39 , 13 , 40]

function isBelowThreshold(currentValue){
    return currentValue < 40
}
console.log(array2.every(isBelowThreshold))

// ******************some*************************
// if only one of the element satisfies the condition
const array = [1 , 2 , 3 , 4 , 5 ]

// checks whether an element is even

function even(element){
    return element % 2 == 0
}
console.log(array.some(even))

// *********************Find idx*******************
const array1 = [5 , 12 , 8 , 130 , 44]
function isLargeNumber(element){
    return element > 13
}
console.log(array1.findIndex(isLargeNumber))