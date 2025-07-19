const express = require('express');
const controller = require('../controller/userController');
const { validateUser } = require('../middleware/validation');

const router = express.Router();

router.post('/user', validateUser, controller.create);
router.post('/user/login', controller.login);
router.get('/users', controller.getAll);
router.delete('/user/:id', controller.deleteById);

module.exports = router;
