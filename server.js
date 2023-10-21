const express = require('express')
const app = express()

// importar conexxion mongodb 

const archivoBD = require('./conexion')  

// importacion del archivo de rutas y modelo usuario 

const rutausuario = require('./rutas/usuario')


// importar body parser 

const bodyParser = require ('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extends:'true'}))



app.use('/api/usuario', rutausuario)

app.get('/',(req,res => {
    res.end ('bienvenido al servidor node js')

}))




// configuracion de server basicos 

//conexxion 

app.listen(5000, function(){
    console.log('El servidor  esta dd corriendo Correcamente')

}) 

