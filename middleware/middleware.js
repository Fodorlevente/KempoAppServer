const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const proxy = require('express-http-proxy');

// setup global middleware here
module.exports = (app) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    // app.use('/', proxy('http://localhost:4000', {
    //     limit: '1mb',
    //     timeout: 3000
    //   }));
};