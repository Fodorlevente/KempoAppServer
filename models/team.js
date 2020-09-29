const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
        // klub neve
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },
        //szervezet, amihez tartozik
        association: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                isEmail: true,
            }
        },
        country: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
        password: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            allowNull: false,
            validate: {
                notEmpty: true,
                isUUID: 4,
            }
        },
        kempo_member: {
            type: Sequelize.BOOLEAN,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true,
            }
        }
    });

    return Team;
}