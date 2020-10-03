const bcrypt = require('bcrypt')
const db = require('../../models/db');
const salt = bcrypt.genSaltSync(10);

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

exports.checkUser = (req, res) => {
    console.log("checkUser");
}



