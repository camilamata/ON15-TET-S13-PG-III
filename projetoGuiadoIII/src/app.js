//Importanto o express
const express = require("express");

//Criando uma const para o APP, que vai chamar a express
const app = express();

//Importando o cors 
const cors = require("cors");
//Configurando o cors
app.use(cors());

//Conectando ao banco de dados
require('dotenv-safe').config();
const db = require("./database/mongoConfig");
db.connect();

//Configurando o body parser pelo método USE
app.use(express.json());

//Importando as rotas
const clientRoute = require("./routes/clientsRoutes");
//const workoutsRoutes = require("./routes/workoutRoutes");


//Acessando as rotas
app.use("/clients", clientRoute);
//app.use("/workouts", workoutsRoutes);


module.exports = app;
