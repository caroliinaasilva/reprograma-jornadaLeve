const PacientesModel = require('../models/pacientesModel')

const createPaciente = async (req, res) => {
    try {
        const { cpf, nome, date } = req.body
        const newPaciente = new PacientesModel({
            cpf, nome, date
        })
        const savedPaciente = await newPaciente.save()
        res.status(201).json({ message: 'nova paciente criada', savedPaciente })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getAll = async (req, res) => {
    try {
        const allPacientes = await PacientesModel.find()
        res.status(200).json(allPacientes)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }

}
const getPacienteById = async (req, res) => {
    try {
        const findPaciente = await PacientesModel.findById(req.params.id)
        res.status(200).json(findPaciente)
      } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
      }
   }

const updatePaciente = async (req, res) => {
    try {
        const { nome, cpf, date } = req.body
        const updatePaciente = await PacientesModel.findByIdAndUpdate(req.params.id, {
            nome, cpf, date
        })
        res.status(200).json(updatePaciente)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}

const deletePaciente = async (req, res) => {
    try{
        const {id} = req.params
       await PacientesModel.findByIdAndDelete(req.params.id)
        const message = `Paciente com o ${id} deletada`
        res.status(200).json({ message })
    } catch(error) {
    console.error(error)
    res.status(500).json({message: error.message })
}
}


module.exports = {
    createPaciente,
    getAll, 
    getPacienteById,
    updatePaciente,
    deletePaciente
}