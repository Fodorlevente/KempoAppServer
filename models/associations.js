// module for all the db associations
module.exports = (db) => {
    db.models.Team.hasMany(db.models.Competitor);
    db.models.Team.belongsTo(db.models.User);
    db.models.Credential.belongsTo(db.models.User);
}