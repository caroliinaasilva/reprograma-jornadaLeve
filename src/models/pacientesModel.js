const mongoose = require('mongoose');

const pacienteSchema = mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  nomeCompleto: {
    type: String,
    required: true,

  },
  cpf: {
    type: Number,
    required: true,
    unique: true,

  },

  dataDeNascimento: {
    type: String,
    required: true,
  },
  
  celular:{
    type: Number
  },

  
}, { timestamps: true });

const Model = mongoose.model('pacientes', pacienteSchema);

module.exports = Model;
