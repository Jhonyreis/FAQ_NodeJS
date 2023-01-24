const Sequelize = require('sequelize');
const conn = require('./database');

//criando tabela com campos Título e Descrição
const Pergunta = conn.define('perguntas', {
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
    descricao: {
    type: Sequelize.TEXT,
    allowNull: false
  }
}); 

Pergunta.sync({force: false}).then(() => {
  console.log('tabela criada');
});

module.exports = Pergunta;