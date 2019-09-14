const express = require('express')

const app = express()

const port = process.env.PORT || 3030

app.use(express.static( __dirname + "/../dist/"));

app.get('/', function peticionGet(req, res)  {
    res.sendFile(__dirname + "/../dist/index.html")
})



app.listen(port)

// console.log(process.mainModule.filename)

console.log('Escuchando en el puerto: ' + port);