function add(a , b){
    console.log('additon is ' , a + b )
}

function subtract(a , b){
    console.log('subtraction is' , a - b)
}

function mul(a , b){
    console.log('multipliaction is' , a*b)
}

function division(a , b){
    console.log('division is :' , a/b);
}

module.exports = {
    addition : add , 
    subtract : subtract,
    multiplication : mul,
    division : division
}
// module.exports is a method provided by Node.js by which you can export your function in key value pair
// you will use your function with keys you have assigned to them