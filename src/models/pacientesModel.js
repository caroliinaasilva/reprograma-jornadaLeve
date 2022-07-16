const mongoose = require ('mongoose')


const pacienteSchema = mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        
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
    dataDeNascimento:{
    type:Date
   }
})

const Model = mongoose.model('Paciente', pacienteSchema)

module.exports = Model