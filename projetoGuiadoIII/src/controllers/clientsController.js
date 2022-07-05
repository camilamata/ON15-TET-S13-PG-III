//Aqui fica a lógica do código (tudo que ele deve executar)

//Colocando tudo da Models na const clientsDB (de Data Base)
const ClientsSchema = require("../models/clientsSchema");

//Cadastra um novo atleta | POST

const register = async (req, res) => {
    try {
        const { name, age, adress, phone, cpf, weekDays, workoutPreference } = req.body;
        const newClient = await ClientsSchema.create({name, age, adress, phone, cpf, weekDays, workoutPreference});
        const registeredClient = await newClient.save();

        if(registeredClient) {
            res.status(201).send({
                "message": "Novo atleta cadastrado!",
                registeredClient
            })
        }
    }
     catch (error) {
        console.error(error)
    }
};

//Acessa o cadastro do atleta por nome | GET
const getByName = async(req, res) => {    
    try {
        const name = req.query.name
        const foundClient = await ClientsSchema.find({name: {$regex : name, $options: 'i'}})

        if(!foundClient) {
            throw new Error ("Nenhum atleta com esse nome. Tente novamente")
        }
        
        res.status(200).json({
            "Buscando por": req.query,
            "Encontramos os(as) seguintes atletas": foundClient
        });
    } catch (error) {
        console.error(error);
        response.status(500).json({
            message: error.message,
            details: "Sua busca foi inválida"
        });
    }
};

const weekdayAttendance = async(req, res) => {
    try {
        const weekDay = req.query.weekDays
        const searchAtendance = await ClientsSchema.find({weekDays : {$regex: weekDay, $options: 'i'}})

        res.status(200).json({
            "Essa é a quantidade de atletas que frequentam a academia neste dia": searchAtendance.length,
            searchAtendance
        })
    } catch (error) {
        console.error(error);
        res.status(404).json({
            message: error.message,
            details: "Busca inválida"
        })        
    }
};
module.exports = {
    register,
    getByName,
    weekdayAttendance
}