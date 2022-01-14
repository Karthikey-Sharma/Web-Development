function fn(a , b) {
    console.log(a + " " + b)
    console.log(arguments)// array like not an array, but not an array
    let res = Array.from(arguments)//how to make an array
    let sq = res.map(x => x * x)
    console.log(sq)
}

fn()
fn(10)
fn(10 , 20)
fn(10 , 20 , 30)