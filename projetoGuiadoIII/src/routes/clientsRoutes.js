//Chamando o express
const express = require("express");

//Chamando o controller
const controller = require("../controllers/clientsController")

//Criando uma variável pro Routes
const router = express.Router();

//Rota que acessa o atleta pelo nome | GET
router.get("/accessByName", controller.getByName);
//Rota que acessa todos os atletas que frequentam um dia da semana | GET
router.get("/dayPreference", controller.weekdayAttendance)

//Rota que atualiza o cadastro de um atleta | PATCH
//router.patch("/updateClient", controller.updateRegister)

//Rota que exclui o cadastro de um atleta | DELETE
//router.delete("/removeAthlet", controller.deleteById)

//Rota que cadastra um novo atleta:
router.post("/registerAthlet", controller.register);

//Exportando o routes
module.exports = router

