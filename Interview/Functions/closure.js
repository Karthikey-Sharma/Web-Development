// // agar koi inner wala function hai kisi outer function kar
// // to inner wale function ke paas outer wale function ke sare variables ka
// // access rhega chahe wo stack se ud hi na gya ho
// // This is because of closure in JS
// function outer(first) {
//     console.log('Inside outer')
//     return function inner(second) {
//         console.log("Inside inner")
//         return first * second;
//     }
// }

// let rval = outer(2)
// console.log("before calling rval that contains inner")
// let ans = rval(4)
// console.log(ans)


// practical example
function enterFirstName(firstName) {
    return function enterLastName(lastName) {
        return function enterAge(age){
            return function printDetails(){
                console.log("Your name is " + firstName + " " + lastName + " and your age is " + age)
            }
        }
    }
}

console.log("Kindly enter your first name :- ")
let enterLastName = enterFirstName("Karthikey")
console.log("Kindly enter your last name :- ")
let enterAge = enterLastName("Sharma")
let printDetails = enterAge(20)
console.log("Doing random stuff")
printDetails()

