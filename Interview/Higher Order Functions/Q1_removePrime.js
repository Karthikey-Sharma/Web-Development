let arr = [5 , 7 , 19 , 12 , 13 , 14]
// can't use extra space
//prime number remove frome given array

function isPrime(n) {
    for(let div = 2 ; div <= n - 1 ; div++){
        if(n % div == 0){
            return false;
        }
    }
    return true;
}

for(var i = arr.length - 1 ; i >= 0 ; i--){
    let result = isPrime(arr[i])
    if(result == true){
         arr.splice(i , 1)
    }
}
console.log(arr)

