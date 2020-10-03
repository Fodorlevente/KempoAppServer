const { Sequelize } = require('sequelize');

const db = new Sequelize({
  host: 'localhost',
	dialect: 'sqlite',
	storage: 'db.sqlite',
	logQueryParameters: true,
	benchmark: true
});

const modelDefiners = [
	require('./competitor'),
	require('./team'),
	require('./user'),
	require('./credential')
	// Add more models here...
	// require('./models/item'),
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
	modelDefiner(db);
}

require('./associations')(db);

// We export the sequelize connection instance to be used around our app.
module.exports = db;