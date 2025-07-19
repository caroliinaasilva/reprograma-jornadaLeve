const express = require('express');
const controller = require('../controller/psychologistController');
const { authenticateToken } = require('../middleware/auth');
const { validatePsychologist } = require('../middleware/validation');

const router = express.Router();

router.post('/psychologist', authenticateToken, validatePsychologist, controller.createPsychologist);
router.get('/psychologists', controller.findAll);
router.get('/psychologist/:id', controller.getPsychologistById);
router.patch('/psychologist/:id', authenticateToken, validatePsychologist, controller.updatePsychologist);
router.delete('/psychologist/:id', authenticateToken, controller.deletePsychologist);

module.exports = router;
