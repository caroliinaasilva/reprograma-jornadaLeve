const PacientesModel = require('../models/pacientesModel');
const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET

const createPatient = async (req, res) => {
  try {
    const authHeader = req.get('authorization');
    if (!authHeader) {
      return res.status(401).send('You need authorization to access');
    }
    const token = authHeader.split(' ')[1];

    await jwt.verify(token, SECRET, async (err) => {
      if (err) {
        return res.status(403).send('Denaid Access');
      }
    });

    const { cpf, nomeCompleto, dataDeNascimento, celular} = req.body;

    const newPatient = new PacientesModel({
      cpf, nomeCompleto, dataDeNascimento, celular
    });
    const savedPatient = await newPatient.save();
    res.status(201).json({ message: 'nova paciente criada', savedPatient });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getAll = async (req, res) => {
  try {
    const allPacient = await PacientesModel.find();
    res.status(200).json(allPacient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
const getPatientById = async (req, res) => {
  try {
    const findPatient = await PacientesModel.findById(req.params.id);
    res.status(200).json(findPatient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updatePatient = async (req, res) => {
  try {
    const authHeader = req.get('authorization');
    if (!authHeader) {
      return res.status(401).send('You need authorization to access');
    }
    const token = authHeader.split(' ')[1];

    await jwt.verify(token, SECRET, async (err) => {
      if (err) {
        return res.status(403).send('Denaid Access');
      }
    });

    const { nomeCompleto, cpf, dataDeNascimento, celular} = req.body;
    const updatePatient = await PacientesModel.findByIdAndUpdate(req.params.id, {
      nomeCompleto, cpf, dataDeNascimento, celular
    });
    res.status(200).json(updatePatient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePatient = async (req, res) => {
  try {
    const authHeader = req.get('authorization');
    if (!authHeader) {
      return res.status(401).send('You need authorization to access');
    }
    const token = authHeader.split(' ')[1];

    await jwt.verify(token, SECRET, async (err) => {
      if (err) {
        return res.status(403).send('Denaid Access');
      }
    });

    const { id } = req.params;
    await PacientesModel.findByIdAndDelete(req.params.id);
    const message = `Paciente com o ${id} deletada`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPatient,
  getAll,
  getPatientById,
  updatePatient,
  deletePatient,
};
