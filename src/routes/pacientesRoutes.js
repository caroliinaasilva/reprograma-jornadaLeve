const express = require('express');
const controller = require('../controller/pacientesController');

const router = express.Router();

router.post('/paciente', controller.createPatient);
router.get('/pacientes', controller.getAll);
router.get('/paciente/:id', controller.getPatientById);
router.patch('/paciente/:id', controller.updatePatient);
router.delete('/paciente/:id', controller.deletePatient);

module.exports = router;
