const userController = require('./competitor.controller');

const express = require('express');
const router = express.Router();

router.get('/competitors', userController.allCompetitors)
router.post('/competitors', userController.saveCompetitor);
router.get('/competitors/:id', userController.singleCompetitor);
router.delete('/competitors/:id', userController.deleteCompetitor);
router.put('/competitors/:id', userController.updateCompetitor);


module.exports = router;

