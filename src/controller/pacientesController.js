const PacientesModel = require('../models/pacientesModel')

const createPatient = async (req, res) => {
    try {

    const { cpf, nomeCompleto, dataDeNascimento } = req.body
      
    const newPatient = new PacientesModel({            
        cpf, nomeCompleto, dataDeNascimento
        })
    const savedPatient = await newPatient.save()
        res.status(201).json({ message: 'nova paciente criada', savedPatient })

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const getAll = async (req, res) => {
    try {
        const allPacient = await PacientesModel.find()
        res.status(200).json(allPacient)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }

}
const getPatientById = async (req, res) => {
    try {
        const findPatient = await PacientesModel.findById(req.params.id)
        res.status(200).json(findPatient)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}

const updatePatient = async (req, res) => {
    try {
        const { nomeCompleto, cpf, dataDeNascimento } = req.body
        const updatePatient = await PacientesModel.findByIdAndUpdate(req.params.id, {
            nomeCompleto, cpf, dataDeNascimento
        })
        res.status(200).json(updatePatient)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}

const deletePatient = async (req, res) => {
    try {
        const { id } = req.params
        await PacientesModel.findByIdAndDelete(req.params.id)
        const message = `Paciente com o ${id} deletada`
        res.status(200).json({ message })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}


module.exports = {
    createPatient,
    getAll,
    getPatientById,
    updatePatient,
    deletePatient
}