const controller = require('./user.controller');
const express = require('express');
const router = express.Router();

router.get('/users', controller.allUsers)
router.post('/users', controller.saveUser);
// router.put('/:id', controller.updateUser);
// router.delete('/:id', controller.deleteUser);



module.exports = router;
