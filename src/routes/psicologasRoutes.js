const controller = require('../controller/psicologasController')
const express = require('express')

const router = express.Router()

router.post('/psicologa', controller.createPsicologa)
router.get('/psicologas', controller.findAll)
router.get('/psicologa/:id', controller.getpsicobyId)
router.patch('/psicologa/:id', controller.updatePsico)
router.delete('/psicologa/:id', controller.deletePsico)

module.exports = router