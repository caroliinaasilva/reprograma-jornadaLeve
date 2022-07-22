const mongoose = require ('mongoose')


const pacienteSchema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId,
        default: mongoose.Types.ObjectId
        },

    cpf: {
        type: String,
        required: true, 
        unique: true, 
       
    },
    nome:{
        type: String,
        required: true
        
    },
    date: {
        type: String,
        required: true
    },
}, { timestamps: true }) 

const Model = mongoose.model('paciente', pacienteSchema)

module.exports = Model