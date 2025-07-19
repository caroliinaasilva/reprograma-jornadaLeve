const PatientModel = require('../models/patientModel');

const createPatient = async (req, res) => {
  try {
    const { cpf, fullName, dateOfBirth, phone } = req.body;

    const newPatient = new PatientModel({
      cpf,
      fullName,
      dateOfBirth,
      phone,
    });
    const savedPatient = await newPatient.save();
    return res.status(201).json({ message: 'New patient created', savedPatient });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const allPatients = await PatientModel.find();
    return res.status(200).json(allPatients);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getPatientById = async (req, res) => {
  try {
    const foundPatient = await PatientModel.findById(req.params.id);
    if (!foundPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    return res.status(200).json(foundPatient);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const { fullName, cpf, dateOfBirth, phone } = req.body;
    const updatedPatient = await PatientModel.findByIdAndUpdate(
      req.params.id,
      {
        fullName,
        cpf,
        dateOfBirth,
        phone,
      },
      { new: true, runValidators: true }
    );
    
    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    
    return res.status(200).json(updatedPatient);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPatient = await PatientModel.findByIdAndDelete(req.params.id);
    
    if (!deletedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }
    
    const message = `Patient with ID ${id} deleted`;
    return res.status(200).json({ message });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPatient,
  getAll,
  getPatientById,
  updatePatient,
  deletePatient,
};
