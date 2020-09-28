// API router will mount other routers
module.exports = (app) => {
    app.get('/', (req, res) => { res.send('Hello API test') });
    app.use('/api/users', require('./user/user.routes'));
}
