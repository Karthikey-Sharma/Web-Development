
let obj = {
    fun1 : function(frnd1 , frnd2) {
        console.log('This man is called ' + this.fullName + '. His age is' + this.age + '.' )
        console.log(this.fullName + ' says hello to '  + frnd1 + '.')
        console.log(this.fullName + ' says hello to ' + frnd2 + '.')

        console.log(arguments)
    },
    fullName : 'Karthikey Sharma',
    age : 20,
}

// obj.fun1('Navdeep' , 'Vikas')

let obj2 = {
    fullName : "Neha" , 
    age : 33
    }


// call is a function . it is available on all functions.
// it can be used to call the functions 
// the use case if , if you want to override the default this
// 1st param mein obj pass krte the
// or 1 st param is this

// obj.fun1.call(obj2, "Mehwish" , "Shailja")
obj.fun1.apply(obj2 , ["Mehwish", "Shailja"])

// apply is similar to call. it just uses an array to pass arguments

//bind is dis-similar. It doesnt make a call. It gives you a new function to call
let boundFunction = obj.fun1.bind(obj2 , "Mehwish" , "Shailja" , 'Supriya')
// boundFunction()
boundFunction('Sumeet')