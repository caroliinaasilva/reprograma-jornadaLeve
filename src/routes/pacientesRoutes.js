const controller = require('../controller/pacientesController')
const express = require('express')

const router = express.Router()

router.post('/paciente', controller.createPaciente)
router.get('/pacientes', controller.getAll)
router.get('/paciente/:id', controller.getPacienteById)
router.patch('/paciente/:id', controller.updatePaciente)
router.delete('/paciente/:id', controller.deletePaciente)

module.exports = router