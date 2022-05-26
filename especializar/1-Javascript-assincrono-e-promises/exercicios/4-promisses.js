let aceitar = false

let promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        resolve("Promessa aceita!!!")
    } else {
        reject("Promessa rejeitada!!!")
    }
})

promessa
    .then(result => console.log(result))
    .catch(reject => console.log(reject))
    .finally(() => console.log("- finalizado!"))