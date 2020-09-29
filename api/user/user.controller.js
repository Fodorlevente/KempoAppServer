const db = require('../../models/db');

exports.allUsers = (req, res) => {
    db.models.User.findAll()
    .then(users => {
        res.status(200).json(users);
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}

exports.saveUser = (req, res) => {
    const { name, gender, weight, qualification, birth_date, belt_degree, budopass_number, validated} = req.body;
    db.models.User.create({
        name,
        gender,
        weight,
        qualification,
        birth_date,
        belt_degree,
        budopass_number,
        validated
     })
    .then(user => {
        res.status(200).json(user);
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}

exports.singleUser = (req, res) => {
    db.models.User.findByPk(req.params.id)
    .then(user => { 
        if(user === null){
            res.sendStatus(404);
        }else{
            res.status(200).json(user);
        }
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}

exports.deleteUser = (req, res) => {
        db.models.User.destroy({
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

exports.updateUser = (req, res) => {
    const { name, gender, weight, qualification, birth_date, belt_degree, budopass_number, validated} = req.body;
    db.models.User.update({
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
    .then(user => {
        res.status(200).json(user);
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    })
}