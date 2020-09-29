const db = require('../../models/db');

exports.allTeams = (req, res) => {
    db.models.Team.findAll()
    .then(teams => {
        res.status(200).json(teams);
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}

exports.saveTeam = (req, res) => {
    const { name, association, email, country, password, kempo_association_member } = req.body;
    db.models.Team.create({
        name,
        association,
        email,
        country,
        password,
        kempo_association_member
     })
    .then(team => {
        res.status(200).json(team);
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}

exports.singleTeam = (req, res) => {
    db.models.Team.findByPk(req.params.id)
    .then(team => { 
        if(team === null){
            res.sendStatus(400);
        }else{
            res.status(200).json(team);
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}

exports.deleteTeam = (req, res) => {
        db.models.Team.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (deletedRecord) {
            if(deletedRecord === 1){
                res.status(200).json({message:"Deleted successfully"});          
            }else{
                res.status(409).json({message:"record not found"})
            }
        })
        .catch(error => {
            res.status(400).send(error);
        })
}

exports.updateTeam = (req, res) => {
    const { name, association, email, country, password, kempo_association_member } = req.body;
    db.models.Team.update({
        name,
        association,
        email,
        country,
        password,
        kempo_association_member
     },{
         where: {
            id: req.params.id
         }
     })
    .then(team => {
        res.status(200).json(team);
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}