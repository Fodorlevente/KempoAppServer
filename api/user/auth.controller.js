const bcrypt = require('bcrypt')
const db = require('../../models/db');
const salt = bcrypt.genSaltSync(10);
const { validationResult } = require('express-validator');

exports.saveUser = async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        res.status(200).send({
            "pass": hashedPassword,
            "salt": salt
        });
    } catch {
        res.status(403).send();
    }
   
}

//TESTTTTTT
exports.checkUser = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){

        res.status(403).send(errors, req, res);
        return false;
    }
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        res.status(200).send({
            "pass": hashedPassword,
            "salt": salt
        });
    } catch {
        res.status(403).send();
    }
}



