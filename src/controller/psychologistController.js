const PsychologistModel = require('../models/psychologistModel');

const createPsychologist = async (req, res) => {
  try {
    const {
      fullName,
      crp,
      specialties,
      biography,
    } = req.body;
    const newPsychologist = new PsychologistModel({
      fullName,
      crp,
      specialties,
      biography,
    });
    const savedPsychologist = await newPsychologist.save();
    return res.status(201).json({ message: 'New psychologist created', savedPsychologist });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const allPsychologists = await PsychologistModel.find();
    return res.status(200).json(allPsychologists);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const getPsychologistById = async (req, res) => {
  try {
    const foundPsychologist = await PsychologistModel.findById(req.params.id);
    if (!foundPsychologist) {
      return res.status(404).json({ message: 'Psychologist not found' });
    }
    return res.status(200).json(foundPsychologist);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const updatePsychologist = async (req, res) => {
  try {
    const {
      fullName,
      crp,
      specialties,
      biography,
    } = req.body;
    const updatedPsychologist = await PsychologistModel.findByIdAndUpdate(
      req.params.id,
      {
        fullName,
        crp,
        specialties,
        biography,
      },
      { new: true, runValidators: true }
    );
    
    if (!updatedPsychologist) {
      return res.status(404).json({ message: 'Psychologist not found' });
    }
    
    return res.status(200).json(updatedPsychologist);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

const deletePsychologist = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPsychologist = await PsychologistModel.findByIdAndDelete(req.params.id);
    
    if (!deletedPsychologist) {
      return res.status(404).json({ message: 'Psychologist not found' });
    }
    
    const message = `Psychologist with ID ${id} successfully deleted`;
    return res.status(200).json({ message });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPsychologist,
  findAll,
  getPsychologistById,
  updatePsychologist,
  deletePsychologist,
};
