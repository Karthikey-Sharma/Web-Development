let arr = [1 , 2 , 3 , 4 ,5 ,6 ,7 , 8]
function checkOdd(num){
    return num % 2 == 1 
}


function myFilter(arr , test){
    let newArr = []
    for(let i = 0 ; i < arr.length ; i++){
        if(test(arr[i]) == true){
            newArr.push(arr[i])
        }
    }
    return newArr
}

let newArray = arr.myFilter(checkOdd)
console.log(newArray)
 