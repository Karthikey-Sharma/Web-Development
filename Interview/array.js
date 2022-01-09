//not a defined size
let array = [1 , 2 , 3 , 4 , 5]
//print
console.log(array)
//looping 
//length property
// console.log(array.length)
// traversing an array
// for(let i = 0 ; i < array.length ; i++){
//     // get value
//     console.log(array[i])
// }
// addLast
// array.push(10)
// //addFirst
// array.unshift(20)

// console.log(array)

// //removeLast
// array.pop()
// //removeFirst
// array.shift()
// console.log(array)

//Part of that array :-
//First parameter is starting idx
//Second parameter is ending idx 
// excluding ending idx
// start , end - 1

// let copyOfPartOfThatArray = array.slice(1 , 3)
// console.log("sliced Array :- " , copyOfPartOfThatArray)

// splice is a generic delete
// first param is starting idx
// second param is delete count
let splicedArray = array.splice(2 , 3)
console.log("spliced array :- " , splicedArray)// deleted term aayegi array ke format mein
console.log("``````````````````````````````````````````````````````````")
console.log(array) // origional array se ab wo delete ho gya 
