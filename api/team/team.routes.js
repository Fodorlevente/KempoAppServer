const controller = require('./team.controller');
const express = require('express');
const router = express.Router();

router.get('/teams', controller.allTeams)
router.post('/teams', controller.saveTeam);
router.get('/teams/:id', controller.saveTeam);
router.delete('/teams/:id', controller.deleteTeam);
router.put('/teams/:id', controller.updateTeam);


module.exports = router;
