require('dotenv').config();

const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Crear el servidor de express
const app = express();

// Configurar cors
app.use(cors())

// Base de datos
dbConnection();

// console.log( process.env );


// Rutas
app.get( '/', (req, res) => {

    res.status(400).json({
        ok: true,
        msg: 'Hola Mundo'
    });

});

app.listen( process.env.PORT , () => {
    console.log('Servidor ejecutando en el puerto ' +  process.env.PORT );
});

// console.log('hola mundo');