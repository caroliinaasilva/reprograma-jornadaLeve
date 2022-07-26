const mongoose = require('mongoose');

const psicologaSchema = mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  nomeCompleto: {
    type: String,
    required: true,
  },

  crp: {
    type: Number,
    unique: true,
  },

  especialidades: {
    type: [String],
  },

  biografia: String,

}, { timestamps: true });

const Model = mongoose.model('psicologa', psicologaSchema);

module.exports = Model;
