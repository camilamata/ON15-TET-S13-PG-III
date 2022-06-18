//Aqui eu vou precisar requerer o schema, porque ele conecta com a collection do banco de dados, e é o esqueleto das informações

//Por meio de uma função anonima, recebo a requisição e a resposta (req,res)

//Preciso enviar as informações de todas as notas do meu banco de dados
//por fim, exporto as funções para a ROUTES conseguir acessar elas

const noteSchema = require("../models/noteSchema")
const NoteSchema = require("../models/noteSchema")

const getAll = async (request, response) => {
    try {
        const allNotes = await NoteSchema.find()
        response.status(200).json({allNotes})

    } catch (error) {
        response.status(500).json({ message: error.message })
    }
}
const registerNote = async (req, res) => {
    try {
       const newNote = new NoteSchema ({
            author: req.body.author,
            title: req.body.title,
            createdAt: new Date()
        });
        console.log("NOVA NOTA", newNote);
        const savedNote = await newNote.save();
        if(savedNote) {
            res.status(201).send({
                "message": "Nota criada com sucesso!",
                savedNote
            })
        }

    } catch (error) {
        console.error(err);
    }
}

const updateNote = async (req, res) => {
    try {
        const findNote = await NoteSchema.findById(req.params.id)
        if(!findNote) {
            res.status(404).send({
                "message": "Não encontramos a nota",
                "statusCode": 404
            })
        }
        findNote.author = req.body.author || findNote.author
        findNote.title = req.body.title || findNote.title
        const updatedNote = await findNote.save()
        res.status(200).send({
            "message": "Nota atualizada!",
            updatedNote
        })
    } catch (error) {
        console.error(err)
    }
}

const deleteNote = async (request, response) => {
    try {
        await NoteSchema.findByIdAndDelete(request.params.id)
        
        response.status(200).send({
            message: "Nota deletada!"
        })
    } catch (error) {
        response.status(500).send({
            message: error.message
        })
    }
}




module.exports = {
    getAll,
    registerNote,
    updateNote,
    deleteNote
}