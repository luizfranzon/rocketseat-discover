
let timeOut = 1000
let count = 1

function iteration() {
    console.log(`${count} - Sim!`)
    count++
}

setInterval(iteration, timeOut)