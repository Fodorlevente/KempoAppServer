const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const saltRounds = 10;

const db = require('../../models/db');

const validateRequest = (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(403).send(errors);
        return false;
    }
}

exports.saveUser = async (req, res) => {
    validateRequest(req, res);
    try {
        const user = await db.models.User.create({ "email": req.body.email });
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(req.body.password, salt);
        db.models.Credential.create(
            {
                "password": hash,
                "UserId": user.id
            }
        )
            .then(credential => {
                res.status(200).send(user);
            })
            .catch(error => {
                res.status(403).send("AAAAAAAAAA");
            })
    } catch {
        res.status(403).send();
    }
}

exports.checkUser = async (req, res) => {
    validateRequest(req, res);
    try {
        const user = await db.models.User.findOne({ where: { "email": req.body.email } });
        if ( user === null){
            res.status(403).send();
        } else {
            const credentials = await db.models.Credential.findOne({
                where : {
                    "UserId": user.id
                }
            });
            const isPasswordMatch = await bcrypt.compare(req.body.password, credentials.password);
            if(isPasswordMatch){
                res.status(200).send();
            } else {
                res.status(403).send();
            }
        }
    } catch {
        res.status(403).send();
    }
}
