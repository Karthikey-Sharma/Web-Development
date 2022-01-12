// var is a function scope 

function fn(){
    console.log("Before Execution 24" , a)
    var a
    console.log("After Execution 26" , a)
    a = 20
    if(true){
        var a = 30
        console.log("30" , a)
    }
    console.log("After Initialisation 32" , a)
}
fn()
