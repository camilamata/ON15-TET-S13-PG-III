const express = require('express');
//instanciando o express (acessando)
const app = express();
//require de model: importação de arquivos
const cors = require('cors');
//instanciando o cors 
app.use(cors());

require('dotenv-safe').config();

const db = require('./database/mongoConfig');
db.connect();

//arquivo de rotas
const noteRoutes = require('./routes/noteRoutes');

app.use(express.json());
app.use("/notes", noteRoutes);


//exportando o modulo app
module.exports = app;