const express = require('express');
const app = express();
const db = require('./models/db');

if (process.env === 'Test') {
    console.log('This is the test environment');
} else {
    console.log('This is the production environment');
}

const port = process.env.PORT || 3000;

// setup the express middleware
require('./middleware/middleware')(app);

// setup the api
require('./api')(app);

// connect to DB then run the server
db.sync({force : true}).then(() => {
    app.listen(port, () => {
        console.log('running server on port ' + port);
    })
});