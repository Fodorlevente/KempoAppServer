const express = require('express');
const bodyParser = require('body-parser');

const app = express();

if (process.env === 'Test') {
    console.log('This is the test environment');
} else {
    console.log('This is the production environment');
}

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('API Test');
});

app.listen(port, () => {
    console.log(`Running on ${port}`);
});

module.exports = app;