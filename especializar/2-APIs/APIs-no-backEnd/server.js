const express = require('express');
const app = express()

let author = "Luiz"

app.use(express.json())

app.route('/').get((req, res) => res.send("oie!"))

app.route('/a').post( (req,res) => res.send(req.body) )

app.route("/put").put((req, res) => {
    author = req.body.author
})

app.route("/delete").delete((req, res) => {
    author = ""
    res.send("apagado!")
})

app.route("/bparam").post( (req, res) => {
    const { nome, cidade } = req.body
    res.send(`Olá, ${nome}. Bem vindo à ${cidade}`)
})

app.route("/api/:number").get( (req, res ) => {
    const { number } = req.params
    res.send(`O número é ${number}`)
})

app.listen(3000)
console.log("Servidor rodando em: http://localhost:3000")

