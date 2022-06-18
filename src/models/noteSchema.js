//o schema é o template, o esqueleto. Fala qual é o modelo que uma info
//deve seguir para ser adicionada por banco de dados 

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    author: {
        type: String,
        required: true //dizendo que a propriedade é obrigatória
    },
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

module.exports = mongoose.model('note', noteSchema);