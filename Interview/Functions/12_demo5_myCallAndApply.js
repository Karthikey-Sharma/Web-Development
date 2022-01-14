Function.prototype.myCall = function(){
    let orgFun = this
    let args = Array.from(arguments)
    let thisForCall = args[0]
    let params = args.slice(1, args.length)

    thisForCall.fun = orgFun
    thisForCall.fun(...params)
    // arr = [10 , 20 , 30 , 40 , 50 , 60]
    // ...arr = 10 , 20 , 30 , 40 , 50 , 60
    delete thisForCall.fun
}

Function.prototype.myApply = function(){
    let orgFun = this
    let args = Array.from(arguments)
    let thisForCall = args[0]
    let params = args[1]

    thisForCall.fun = orgFun
    thisForCall.fun(...params)
    delete thisForCall.fun
}
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
// obj.fun1.myCall(obj2 , "Karthikey" , "Vasu" , "Sandeep" , "Kritagya")
obj.fun1.myApply(obj2 , ["Karthikey" , "Vasu" , "Sandeep" , "Kritagya"])
