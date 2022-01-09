// hof on arrays
// it takes a function -> returns true or false
// filter function callls the given function on every element of that arrays
// that function returns ->
///true then you will add that element to the new array
// false then you will not add that element to the new array

let arr = [1 , 2 , 3 , 4 ,5 ,6 ,7 , 8]
function checkOdd(num){
    return num % 2 == 1 
}

// let newArray = arr.filter(checkOdd)
// console.log(newArray)

function myFilter(arr , test){
    let newArr = []
    for(let i = 0 ; i < arr.length ; i++){
        if(test(arr[i]) == true){
            newArr.push(arr[i])
        }
    }
    return newArr
}

let newArray = myFilter(arr , checkOdd)
console.log(newArray)

// ab arr.filter() wala code implement kaise krte hai wo dekhenge



