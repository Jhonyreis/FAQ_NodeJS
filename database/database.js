const Sequelize = require('sequelize');

const conn = new Sequelize('guiaperguntas', 'root', 'Stdi9@1010', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = conn;