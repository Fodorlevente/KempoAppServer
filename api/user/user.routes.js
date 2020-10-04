const authController = require('./auth.controller');

const express = require('express');
const { check } = require('express-validator');
const router = express.Router();


const WRONG_PASSWORD_MSG = ['Password should not be empty,', 
                  'minimum eight characters,',
                  'at least one letter,',
                  'one number and one special character'].join('');

const password_regex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

router.post('/user/registration',
  [
    check('email', 'Email is not valid')
      .exists()
      .normalizeEmail()
      .isEmail(),
    check('password', WRONG_PASSWORD_MSG)
      .exists()
      .isLength({ min: 8 })
      .matches(password_regex)
  ],
  authController.saveUser);

router.post('/user/login',
  [
    check('email', 'Email is not valid')
      .exists()
      .normalizeEmail()
      .isEmail(),
    check('password', WRONG_PASSWORD_MSG)
      .exists()
      .isLength({ min: 8 })
      .matches(password_regex)
  ],
  authController.checkUser);


module.exports = router;

