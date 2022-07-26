const PsicologasModel = require('../models/psicologasModel');

const createPsicologa = async (req, res) => {
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

    const {
      nomeCompleto, crp, especialidades, biografia,
    } = req.body;
    const newPsicologa = new PsicologasModel({
      nomeCompleto, crp, especialidades, biografia,
    });
    const savedPsicologa = await newPsicologa.save();
    res.status(201).json({ message: 'nova psciologa criada', savedPsicologa });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const findAll = async (req, res) => {
  try {
    const allpsicos = await PsicologasModel.find();
    res.status(200).json(allpsicos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const getpsicobyId = async (res, req) => {
  try {
    const findPsico = await PsicologasModel.findById(req.params.id);
    res.status(200).json(findPsico);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const updatePsico = async (req, res) => {
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

    const {
      nomeCompleto, crp, especialidades, biografia,
    } = req.body;
    const updatePsico = await PsicologasModel.findByIdAndUpdate(req.params.id, ({
      nomeCompleto, crp, especialidades, biografia,
    }));
    res.status(200).json(updatePsico);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deletePsico = async (req, res) => {
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
    await PsicologasModel.findByIdAndDelete(req.params.id);
    const message = `Psicologa com o ${id} deletada com sucesso`;
    res.status(200).json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPsicologa, findAll, getpsicobyId, updatePsico, deletePsico,
};
