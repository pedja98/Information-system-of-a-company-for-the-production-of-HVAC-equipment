'use strict';

const User = require('./user')
const Company = require('./company')
const Device = require('./device')
const For_Company = require('./for_company')
const Material_For_Device = require('./material_for_device')
const Material_In_Stock = require('./material_in_stock')
const Material = require('./material')
const Order = require('./order')
const Purchase_Order = require('./purchase_order')
const User_Activity = require('./user_activity')
const Work_Order = require('./work_order')


const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User(db.sequelize, db.Sequelize)
db.Company = Company(db.sequelize, db.Sequelize)
db.Device = Device(db.sequelize, db.Sequelize)
db.For_Company = For_Company(db.sequelize, db.Sequelize)
db.Material_For_Device = Material_For_Device(db.sequelize, db.Sequelize)
db.Material_In_Stock = Material_In_Stock(db.sequelize, db.Sequelize)
db.Material = Material(db.sequelize, db.Sequelize)
db.Order = Order(db.sequelize, db.Sequelize)
db.Purchase_Order = Purchase_Order(db.sequelize, db.Sequelize)
db.User_Activity = User_Activity(db.sequelize, db.Sequelize)
db.Work_Order = Work_Order(db.sequelize, db.Sequelize)

db.User.hasMany(db.User_Activity, {as: 'activities', foreignKey: 'userId'});
db.User_Activity.belongsTo(db.User, {as: 'user', foreignKey: 'id'});

module.exports = db;
