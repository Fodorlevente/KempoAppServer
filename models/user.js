const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            }
        }
    });

    return User;
}