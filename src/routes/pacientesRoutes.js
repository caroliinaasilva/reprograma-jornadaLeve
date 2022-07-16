const controller = require('../controller/pacientesController')
const express = require('express')

const router = express.Router()

router.post('/pacientes', controller.createPaciente)
router.get('/pacientes', controller.getAll)
router.get('pacientes/:id', controller.getById)


module.exports = router