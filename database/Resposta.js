const Sequelize = require('sequelize');
const conn = require('./Database');

const Resposta = conn.define('respostas', {
  corpo: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  perguntaID: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Resposta.sync({force: false});

module.exports = Resposta;