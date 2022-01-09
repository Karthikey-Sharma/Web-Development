let member = [
    {
        g : "m" , 
        ages : 20 , 
        income : 200
    } , 

    {
        g : "f" , 
        ages : 25 , 
        income : 100
    } , 

    {
        g : "m" , 
        ages : 20 , 
        income : 70
    } ,

    {
        g : "f" , 
        ages : 30 , 
        income : 50
    }

]

// income -> less than 100 -> douuble there income using mapFxn


// MERA METHOD

// function solve(mem){
//     if(mem['income'] < 100){
//         mem['income'] = 2 * mem['income']
//     }
//     return mem
// }

// let so = member.map(solve)
// console.log(so)

// Sir method 
console.log("Origional Array -> " , member)
// reference type
function smallFunction(elem){
    // loop
    //option 1
    // let newObj = {};
    // for(let key in elem){
    //     newObj[key] = elem[key]
    // }
    // Ya fir ye // Ab ye krne se origional array change nhi hoga
    let newObj = {...elem}
    if(newObj.income < 100){
        newObj.income *= 2
    }
    return newObj
}

let newArray =  member.map(smallFunction)
console.log(newArray)
// array ke idx pe objects the 
// Aur objects reference type hota hai
// to function pe har obj ka address jayega
// As adress pe change ayega to (pass by reference) to origional array bhi change hoga


console.log("Origional Array -> " , member)


// array ke idx pe objects the 
// Aur objects reference type hota hai
// to function pe har obj ka address jayega
// As adress pe change ayega to (pass by reference) to origional array bhi change hoga
// this implies inme references pass hote hai
let ele = member[0]
ele.income *= 2
let variable = ele
console.log(variable)




////////////////////////////////////////////////////////////////////////////////////
// let incomes = [200 , 100 , 70 , 50]
// let element = incomes[0]
// element *= 2
// let newA= incomes

// Array ke andar number stored hai aur ye reference type nhi hai
// to origional array pe change nhi ayega
///This implies if array has primitive values then value pass hoti hai adress nhi
// console.log(newA) 
// console.log(incomes)


