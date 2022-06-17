const express = require('express');
const app = express()

let author = "Luiz"

app.listen(3000)

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