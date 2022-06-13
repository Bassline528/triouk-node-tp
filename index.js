const express = require("express")

const app = express()

app.use(express.json())

//rutas

app.use(express.static("public"))

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});


const server = require('http').createServer(app);

server.listen(3000, (err) => {

    if(err) throw new Error(err);

    console.log(`Sevidor corriendo en puerto 3000`)

});