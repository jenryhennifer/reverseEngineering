'use strict';

//requires the fs installation
var fs        = require('fs');
//requires the path installation
var path      = require('path');
//requires sequelize
var Sequelize = require('sequelize');
//basename: returns the last portion of the path, to extract file name from path
var basename  = path.basename(module.filename);
//if the NODE_ENV is not available, then use yoru local environment
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
//creating an object
var db        = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    //searching for files that end in .js and are NOT a hidden file
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//exports the db post sequelize
module.exports = db;
