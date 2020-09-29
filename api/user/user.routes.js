const controller = require('./user.controller');
const express = require('express');
const router = express.Router();

router.get('/users', controller.allUsers)
router.post('/users', controller.saveUser);
router.get('/users/:id', controller.singleUser);
router.delete('/users/:id', controller.deleteUser);
router.put('/users/:id', controller.updateUser);


module.exports = router;
