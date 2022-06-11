'use strict';

const User = require('./user')
const User_Activity = require('./user_activity')
const Device = require('./device')
const Order = require('./order')
const Ordered_Device = require('./ordered_device')
const Material = require('./material')
const Stock = require('./stock')
const Material_For_Ordered_Device = require('./material_for_ordered_device')

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
db.User_Activity = User_Activity(db.sequelize, db.Sequelize)
db.Device = Device(db.sequelize, db.Sequelize)
db.Order = Order(db.sequelize, db.Sequelize)
db.Device = Device(db.sequelize, db.Sequelize)
db.Ordered_Device = Ordered_Device(db.sequelize, db.Sequelize)
db.Material = Material(db.sequelize, db.Sequelize)
db.Stock = Stock(db.sequelize, db.Sequelize)
db.Material_For_Ordered_Device = Material_For_Ordered_Device(db.sequelize, db.Sequelize)

db.User.hasMany(db.User_Activity, { as: 'activities', foreignKey: 'userId' });
db.User_Activity.belongsTo(db.User, { as: 'user', foreignKey: 'id' });

db.User.hasMany(db.Order, { as: 'orders', foreignKey: 'userId' });
db.Order.belongsTo(db.User, { as: 'user', foreignKey: 'id' });

db.Device.hasMany(db.Ordered_Device, { as: 'ordered', foreignKey: 'deviceId' });
db.Ordered_Device.belongsTo(db.Device, { as: 'device', foreignKey: 'id' });

db.Order.hasMany(db.Ordered_Device, { as: 'devices', foreignKey: 'orderId' });
db.Ordered_Device.belongsTo(db.Order, { as: 'order', foreignKey: 'id' });

db.Material.hasOne(db.Stock, { as: 'stock', foreignKey: 'id' })
db.Stock.belongsTo(db.Material, { as: 'material', foreignKey: 'id' })

db.Device.hasMany(db.Material_For_Ordered_Device, { as: 'material', foreignKey: 'deviceId' })
db.Material_For_Ordered_Device.belongsTo(db.Device, { as: 'device', foreignKey: 'id' })

db.Material.hasMany(db.Material_For_Ordered_Device, { as: 'device', foreignKey: 'materialId' })
db.Material_For_Ordered_Device.belongsTo(db.Material, { as: 'material', foreignKey: 'id' })

module.exports = db;
