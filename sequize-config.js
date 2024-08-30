const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
const config = require('./config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  timezone: '+05:30',
  logging: true,
});

let db = {
  Sequelize,
  sequelize,
  models: {},
  masterTables: {}, // Initialize if needed
};

const modelsDir = path.resolve(__dirname, 'models');

// Loop through all files in models directory, ignoring hidden files and this file
fs.readdirSync(modelsDir)
  .filter((file) => file.indexOf('.') !== 0 && file.indexOf('.map') === -1 && file.endsWith('.js'))
  .forEach((file) => {
    try {
      const model = require(path.join(modelsDir, file))(db.sequelize, db.Sequelize.DataTypes);
      if (model) {
        db.models[model.name] = model;
      }
    } catch (error) {
      console.error(`Error loading model ${file}:`, error);
    }
  });

// Initialize model associations
Object.keys(db.models).forEach((modelName) => {
  if (db.models[modelName].associate) {
    db.models[modelName].associate(db.models);
  }
});

db.sequelize.options.logging = (str) => {
  if (config.dbLog) {
    console.log('\n', str, '\n');
  }
};

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

process.on('SIGINT', () => {
  console.log('SIGINT: Closing database connection');
  db.sequelize.close();
  process.exit(0);
});

module.exports = db;
