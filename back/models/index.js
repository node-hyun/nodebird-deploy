// back\models\index.js

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '\config\config.json')[env];
const config = require('../config/config')[env];

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// 테이블 추가 
db.Comment = require('./comment')(sequelize, Sequelize);
db.Hashtag = require('./hashtag')(sequelize, Sequelize);
db.Image = require('./image')(sequelize, Sequelize);
db.Post = require('./post')(sequelize, Sequelize);
db.User = require('./user')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

