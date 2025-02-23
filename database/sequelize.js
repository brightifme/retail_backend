const { Sequelize } = require('sequelize');
const config = require('../config/config'); // Import config

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env]; // Get the correct config for the environment

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  dialect: dbConfig.dialect
});

sequelize.authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;
