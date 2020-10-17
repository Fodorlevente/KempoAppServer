const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const db = require('../../models/db');
const secret = 'mysecretsshhh';

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
        const email = req.body.email;
        const user = await db.models.User.create({ "email": email});
        const salt = await bcrypt.genSaltSync(saltRounds);
        const hash = await bcrypt.hashSync(req.body.password, salt);
        console.log(JSON.stringify(user));
        db.models.Credential.create(
            {
                "password": hash,
                "UserId": user.id
            }
        )
            .then( () => {
                sendCookieAndUser(res, user);
            })
            .catch(error => {
                res.status(403).send(error);
            })
    } catch {
        res.status(403).send();
    }
}

exports.checkUser = async (req, res) => {
    validateRequest(req, res);
    try {
        const email = req.body.email;
        const user = await db.models.User.findOne({ where: { "email": email } });
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
                sendCookieAndUser(res, user);
            } else {
                res.status(403).send();
            }
        }
    } catch {
        res.status(403).send();
    }
}

const sendCookieAndUser = (res, user) => 
{   
    const email = user.email;
    const payload = { email };
    const token = jwt.sign(payload, secret, {
        expiresIn: '3m'
    });
    res.cookie('token', token, { httpOnly: true });
    res.status(200).send(user);
}