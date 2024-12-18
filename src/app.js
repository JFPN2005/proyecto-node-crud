// Importaciones
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { config } = require('dotenv');
config();

// Rutas
const bookRoutes = require('./routes/book.routes')

// Utilizamos express
const app = express();
// Parseador
app.use(bodyParser.json())

// Conexion BD
mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME });
const db = mongoose.connection;

//Ruta a utilizar
app.use('/books', bookRoutes)

// Puerto
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto ${3000}`)
});