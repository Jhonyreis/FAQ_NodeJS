const { query } = require('express');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const conn = require('./database/database');
const Pergunta = require('./database/Ask')

//Database
conn
  .authenticate()
  .then(() => {
    console.log('conectato com o banco!')
  })
  .catch((err) => {
    console.log(err);
  });

app.set('view engine', 'ejs');
app.use(express.static('public'));

//body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/perguntar', (req, res) => {
  res.render('perguntar');
});

app.post('/saveask', (req, res) => {
  var titulo = req.body.titulo;
  var descricao = req.body.descricao;
  //exibindo dados na tela
  //res.send('form recebido Título: ' + titulo);

  //salvando dados no banco de dados
  Pergunta.create({
    titulo: titulo,
    descricao: descricao
  }).then(() => {
    res.redirect('/');
  });

});

app.listen(8080, () => {
  console.log('app rodando!');
});