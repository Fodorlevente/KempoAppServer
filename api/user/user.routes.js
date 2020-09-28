const controller = require('./user.controller');
const express = require('express');
const router = express.Router();

router.get('/allUsers', controller.allUsers)
router.post('/addUser', controller.saveUser);

module.exports = router;
