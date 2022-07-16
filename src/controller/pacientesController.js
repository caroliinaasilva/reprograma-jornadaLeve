const PacientesModel = require('../models/pacientesModel')

const createPaciente = async (req, res) => {
    try {
        const { cpf, nome } = req.body
        const newPaciente = new PacientesModel({
            cpf, nome, dataDeNascimento
        })
        const savedPaciente = await newPaciente.save()
        res.status(201).json(savedPaciente)

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
const getById = async (req, res) => {
    try {
        const findpaciente = await PacientesModel.findById(req.params.body)
        res.status(200).json(findpaciente)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message })
    }
}
module.exports = {
    createPaciente,
    getAll,
    getById
}