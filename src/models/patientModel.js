const mongoose = require('mongoose');

const patientSchema = mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  fullName: {
    type: String,
    required: true,
  },
  cpf: {
    type: String, // Changed to String for better formatting
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  phone: {
    type: String, // Changed to String for phone formatting
  },
}, { timestamps: true });

const Model = mongoose.model('patients', patientSchema);

module.exports = Model;
