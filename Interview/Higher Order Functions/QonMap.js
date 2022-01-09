// Example - 1
let array = ["Jasbir Singh" , "Sumeet Malik" , "Rajneesh Kumar" , "Jitendra Punia"]

function giveInitials(fullname){

    let nameArray = fullname.split(" ")
    //console.log(nameArray)
    let firstInitial= nameArray[0].charAt(0)
    let secondInitial= nameArray[1].charAt(0)
    //console.log(firstInitial +  secondInitial)
    return firstInitial + secondInitial
}     

let initialsWalaArray = array.map(giveInitials)
console.log(initialsWalaArray) 

//------------------- Example -> 2-----------------------//

let arr = [5 , 7 , 19 , 12 , 13 , 14]

function squarer(x){
    return x * x
}

let squaredArr = arr.map(squarer)
console.log(squaredArr)

