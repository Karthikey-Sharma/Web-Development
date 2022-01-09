//You are given 2 arrays
//arrays have unique element arrays
//create union of these 2 arrays
//without using extra space
let arr1 = [1 , 3 , 4 , 6 , 5]
let arr2 = [1 , 3 , 100 , 200]
// for(let i = 0 ; i < arr2.length ; i++){
//     let ele = arr2[i]
//     let idx = 0
//     for(let j = 0 ; j < arr1.length ; j++){
//         if(ele != arr1[i]){
//             idx++
//         }
//         else{
//             break;
//         }
//     }
//     if(idx == arr1.length){
//         arr1.push(ele)
//     }
    
// }
// console.log(arr1)

for(let i = 0 ; i < arr2.length ; i++){
    // includes -> true / false
    // indexOf -> idx/-1
    let ele = arr2[i]
    let inPresent = arr1.includes(ele)
    if(inPresent == false){
        arr1.push(ele)
    }
}
console.log(arr1)

 