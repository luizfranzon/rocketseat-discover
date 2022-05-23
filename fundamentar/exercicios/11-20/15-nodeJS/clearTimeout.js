const timeOut = 5000
const done = () => console.log("Done!")

let timer = setTimeout(done, timeOut)
clearTimeout(timer)
