const Sequelize = require('sequelize');
const { belts } = require('./config/belts');
const { qualifications } = require('./config/qualifications');

module.exports = (sequelize, DataTypes) => {
    const Competitor = sequelize.define('Competitor', {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        gender: {
            type: Sequelize.ENUM('Férfi', 'Nő'),
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        weight: {
            type: Sequelize.INTEGER,
            allowNull: false,
            valdiate: {
                notEmpty: true,
                isNumeric: true
            }
        },
        qualification: {
            type: Sequelize.ENUM,
            values: [...qualifications],
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        birth_date: {
            type: Sequelize.DATE,
            allowNull: false,
            validate: {
                notEmpty: true,
                isDate: true,
            }
        },
        belt_degree: {
            type: Sequelize.ENUM,
            values: [...belts],
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        budopass_number: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: true,
                min: 5
            }
        },
        validated: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true,
            }
        }
    });

    return Competitor;
}