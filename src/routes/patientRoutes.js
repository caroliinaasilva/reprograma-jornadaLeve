const express = require('express');
const controller = require('../controller/patientController');
const { authenticateToken } = require('../middleware/auth');
const { validatePatient } = require('../middleware/validation');

const router = express.Router();

router.post('/patient', authenticateToken, validatePatient, controller.createPatient);
router.get('/patients', controller.getAll);
router.get('/patient/:id', controller.getPatientById);
router.patch('/patient/:id', authenticateToken, validatePatient, controller.updatePatient);
router.delete('/patient/:id', authenticateToken, controller.deletePatient);

module.exports = router;
