const { EventEmitter } = require("events")

const ev = new EventEmitter()

// console.log(ev)

ev.on('saySomething', (message) => {
    console.log('eu ouvi você: ' + message)
})

ev.emit('saySomething', "Luiz")
ev.emit('saySomething', "Luiz")
ev.emit('saySomething', "Luiz")

// ev.once('saySomething', (message) => {
//     console.log('eu ouvi você: ' + message)
// }) once ESCUTA O EVENTO APENAS UMA VEZ!