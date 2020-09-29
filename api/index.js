// API router will mount other routers
module.exports = (app) => {
    app.use('/api', require('./user/user.routes'));
    app.use('/api', require('./team/team.routes'));
}
