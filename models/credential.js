const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Credential = sequelize.define('Credential', {
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        salt: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        }
    });

    return Credential;
}