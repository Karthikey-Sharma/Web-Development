// OBJECTS :--

// Key value Pair

// to declare an object

let obj = {}

let cap = {
    // Key       // Pair
    firstName : 'Steve',
    lastName : 'Rogers',
    friends : ['Bucky' , 'Tony Stark' , 'Dr. Banner'],
    isAvenger : true , 
    age : 150 , 

    adress : {
        state : "New York" , 
        city : "ManHattan" , 

    },
    sayHi : function(){
        console.log('Cap says Hi!')
    }

}
/*

console.log(cap)

// Dot Notation

console.log(cap.firstName)
console.log(cap.friends)

// Bracket Notation

console.log(cap['age'])
console.log(cap.friends[1])

cap.sayHi()

//update object
cap.isAvenger = false
console.log(cap)

// create a new key value pair inside the object
cap.movies = ['first Avenger' , 'Age Of Ultron' , 'Endgame']
console.log(cap)
// Delete a Property
delete cap.age
console.log(cap)
*/

// Interview me (::Can Be Asked ::)
// Special Loop - (For in Loop) 
// Specially(Used for Objects)

for(let key in cap){
    console.log('key ->' , key , 'val->' , cap[key])
}
