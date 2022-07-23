const express = require("express");
const router = express.Router();
const controller = require('../controller/userController');

router.post('/user/', controller.create)
// router.post('/user/login', controller.login)

module.exports = router;