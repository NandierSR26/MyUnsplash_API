const express = require('express');
const router = require('./routes');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

const app = express();

dbConnection();

app.use(cors());

app.use(express.json());

app.use(express.static('public'));

app.use(router);

app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

