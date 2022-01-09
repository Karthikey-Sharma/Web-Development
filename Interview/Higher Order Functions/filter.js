let array = [1 , 2 ,3  , 4 , 5 , 6 , 7]

function oddTest(number){
    return number % 2 == 1
}

function evenTest(number){
    return number % 2 == 0
}
// pass -> new Array allows
// jo fail -> new Array does not allows
let oddArray = array.filter(oddTest)
console.log(oddArray)

let evenArray = array.filter(evenTest)
console.log(evenArray)

console.log("Origional Array :->" , array)

// Origional array remains unchanged------------------------------------