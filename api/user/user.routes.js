const authController = require('./auth.controller');

const express = require('express');
const router = express.Router();

const { body, check, oneOf, validationResult } = require('express-validator');

router.post('/user/registration', oneOf([
    [
      check('email').exists(),
      check('password').exists()
    ]
  ]),
    authController.saveUser);
router.post('/user/login', authController.checkUser);


module.exports = router;

