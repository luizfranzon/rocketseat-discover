let timeOut = 1000
let count = 1

function iteration() {
    console.log(`${count} - Sim!`)
    count++
}

let interval = setInterval(iteration, timeOut)

setTimeout( () => clearInterval(interval), 5000)