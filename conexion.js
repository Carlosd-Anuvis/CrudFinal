
// se trae de la bliblioteca Mongoose OMD 
const mongoose = require ('mongoose');
mongoose.connect('mongodb+srv://anuviz:1234@carlos-anuvis.53mmczg.mongodb.net/CRUD');

// conectar a la  base de datos mongoose
const objetobd = mongoose.connection


objetobd.on('connected', ()=>{console.log('CONEXION CORRECTA A MONGODB')})
objetobd.on('error', ()=>{console.log('CONEXION error MONGODB')})



// exportar siempre al server  


module.exports = mongoose


