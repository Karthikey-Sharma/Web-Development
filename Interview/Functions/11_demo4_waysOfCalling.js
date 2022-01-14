Function.prototype.myBind = function(){
    let orgFun = this
    let argsArray = Array.from(arguments)
    let newThis = argsArray[0]
    let newParams = argsArray.slice(1)

    let myFun = function(){
        let moreParams = Array.from(arguments)
        let totalParams = newParams.concat(moreParams)
        orgFun.apply(newThis , totalParams)
    }
    return myFun
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

let boundFunction = obj.fun1.myBind(obj2 , "Karthikey" , "Vasu" , "Sandeep" , "Kritagya")
boundFunction("Pankaj" , "Mansi")
