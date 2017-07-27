import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
import * as Config from '../config/config.json';

const basename  = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const db: any   = {};
const config = (Config as any)[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);

fs
  .readdirSync(__dirname)
  .filter((file: any) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file: any) => {
    const model: any = sequelize.import(path.join(__dirname, file));
    // NOTE: you have to change from the original property notation to
    // index notation or tsc will complain about undefined property.
    db[model['name']] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
