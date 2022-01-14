(function(){
    let timeUnits = parseInt(prompt("how much to count?"))
    let interval = parseInt(prompt("log after how much interval?"))
    // calls the handleCalls function after every interval milliseconds
    let iid = setInterval(handleCalls, interval * 1000)
    // returns an id used to stop calling via clear interval
    handleCalls.TU = timeUnits // Functions can be used as a store of properties (much like objects)

    function handleCalls(){
        console.log(timeUnits + " left")
        timeUnits -= interval
        if(timeUnits == 0){
            clearInterval(iid)
            alert(handleCalls.TU + " has been counted")
        }
    }
    
})()

