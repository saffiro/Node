const os = require('node:os');
const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

const { version } = require('node:os');
const server = express();
const PORT = process.env.PORT;

// El servidor se puede encontrar tambien como APP //

// .gitignore es un archivo donde se eligen los archivos a no subir a git //

// req/require es = cuando se haga una peticion, res/response es = responder con

server.get('/', (req, res)=>{
    res.send(`<H1>HOLA USUARIO, SU SISTEMA OPERATIVO ES:</H1>${os.version()}`)
})

server.get('/frikixsofia', (req, res)=>{
    res.send(`<H1>HOLA USUARIO, EL FRIKI AMA A SOFIA</H1>`)
})
// Esta funcion envia Hola mundo cuando se solicita el puerto 3000

server.listen(PORT, ()=>{
    console.log(`Estoy en el puerto http://localhost:${PORT}`.bgGreen)
});

// Esta funcion envia Estoy en el puerto 3000 cuando se llama

