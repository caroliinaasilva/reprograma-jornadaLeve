const mongoose = require('mongoose');

const psychologistSchema = mongoose.Schema({
  _id: {
    type: mongoose.Types.ObjectId,
    default: mongoose.Types.ObjectId,
  },
  fullName: {
    type: String,
    required: true,
  },
  crp: {
    type: String,
    required: true, // Added required
    unique: true,
  },
  specialties: {
    type: [String],
  },
  biography: { // Added biography field
    type: String,
  },
}, { timestamps: true });

const Model = mongoose.model('psychologist', psychologistSchema);

module.exports = Model;
