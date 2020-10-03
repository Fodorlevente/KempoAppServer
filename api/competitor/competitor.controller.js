const db = require('../../models/db');

exports.allCompetitors = (req, res) => {
    db.models.Competitor.findAll()
    .then(competitors => {
        res.status(200).json(competitors);
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}

exports.saveCompetitor = (req, res) => {
    const { name, gender, weight, qualification, birth_date, belt_degree, budopass_number, validated} = req.body;
    db.models.Competitor.create({
        name,
        gender,
        weight,
        qualification,
        birth_date,
        belt_degree,
        budopass_number,
        validated
     })
    .then(competitor => {
        res.status(200).json(competitor);
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}

exports.singleCompetitor = (req, res) => {
    db.models.Competitor.findByPk(req.params.id)
    .then(competitor => { 
        if(competitor === null){
            res.sendStatus(404);
        }else{
            res.status(200).json(competitor);
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}

exports.deleteCompetitor = (req, res) => {
        db.models.Competitor.destroy({
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

exports.updateCompetitor = (req, res) => {
    const { name, gender, weight, qualification, birth_date, belt_degree, budopass_number, validated} = req.body;
    db.models.Competitor.update({
        name,
        gender,
        weight,
        qualification,
        birth_date,
        belt_degree,
        budopass_number,
        validated
     },{
         where: {
            id: req.params.id
         }
     })
    .then(competitor => {
        res.status(200).json(competitor);
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}