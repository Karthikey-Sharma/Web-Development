//13 Jan 2021
// function outer() {
//     var arr = []
//     for(var i = 0; i < 3; i++) {
//         arr.push(function() {
//             console.log(i)
//         })
//     }
//     return arr
// }

// console.log('Before calling outer')
// let arr = outer()
// arr[0]()
// arr[1]()
// arr[2]()
// console.log('After calling outer')
// output -> 3 , 3 , 3 

// Next question ye hai ki mujhe 0 , 1 , 2 hi print krana hai , kaise krenge?

// solution - 1

function outer() {
    var arr = []
    for(var i = 0; i < 3; i++) {
        function outer1(){
            // j ke liye har baar jb outer1 call hota , tab uske liye memory allocate hoti hai har baari
            // j ke liye hr baar alag se variable bnate ho
            var j = i 
            return function() {
                console.log(j)
            }
        }
        arr.push(outer1())
    }
    return arr
}

console.log('Before calling outer')
let arr = outer()
arr[0]()
arr[1]()
arr[2]()
console.log('After calling outer')

// 3 more cases are there -> let -> 0 , 1 , 2 , let will work , iifee

