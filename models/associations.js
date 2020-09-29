// module for all the db associations
module.exports = (db) => {
    db.models.Team.hasMany(db.models.User);
}