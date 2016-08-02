'use strict';

var express = require('express')
var server = express();
var PUBLIC_DIR = __dirname + '/public';
var UUID = require('node-uuid');
var morgan = require('morgan');

server.set('port', process.env.PORT || 3000);
server.set('view engine', 'pug');

server.use(express.static(PUBLIC_DIR));

server.use(morgan('combined'))


server.use((req, res, next) => {
  next()
})

server.get('/', (req, res) => {
  res.render('index', {});
});

server.get('/games/new', (req, res) => {
  res.redirect('/games/'+UUID.v1())
});

server.get('/games/:gameId', (req, res) => {
  // req.pg.one('SELECT * FROM games where id=$1', [req.params.gameId]).then(function(game){
  //   res.render('games/show', {
  //     game: game
  //   });
  // })

  let game = {
    id: req.params.gameId,
    numberOfAnsers: 14,
  }

  res.render('games/show', {
    game: game
  });
});


server.listen(server.get('port'), () => {
  console.log('starting server at http://localhost:'+server.get('port'))
});
