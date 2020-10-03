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
        country: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
        kempo_association_member: {
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