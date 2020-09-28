const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const apicache = require('apicache');

let cache = apicache.middleware;

// setup global middleware here
module.exports = (app) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(cache('5 minutes'));
};