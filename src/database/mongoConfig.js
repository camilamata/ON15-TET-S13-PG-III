//requerendo o mongoose, que também é um módulo
const moogose = require('mongoose')

//Definindo a URI, string de conexão com o DB
const MONGODB_URI = process.env.MONGODB_URI

//Esperar o mongoose conectar
//como boas práticas, ao utilizar o async await, colocar um try catch junto
const connect = async () => {
    try {
        await moogose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        
        console.log('banco conectado!')
    } catch(error) {
        console.error(error)
    }
}
module.exports = { connect }