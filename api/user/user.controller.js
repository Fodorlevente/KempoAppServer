const models = require('../../models/db');

exports.allUsers = (req, res) => {
    models.User.findAll()
    .then(users => {
        res.json(users);
    })
    .catch(error => {
        console.log(error);
        res.status(404).send(error);
    })
}

exports.saveUser = (req, res) => {
    const name = req.body.name;
    models.User.create({ name })
    .then(user => {
        res.json(user);
    })
    .catch(error => {
        console.log(error);
        res.status(404).send(error);
    })
}

