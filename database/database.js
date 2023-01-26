const Sequelize = require('sequelize');

const conn = new Sequelize('stdi9_estudo_faqnodeJS', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = conn;