var express = require('express')
var server = express();
var PUBLIC_DIR = __dirname + '/public';
var UUID = require('node-uuid');


server.set('port', process.env.PORT || 3000);
server.set('view engine', 'pug');

server.use(express.static(PUBLIC_DIR));

server.get('/', (req, res) => {
  res.render('index', {});
});


server.get('/games/new', (req, res) => {
  res.redirect('/games/'+UUID.v1())
});

server.get('/games/:gameId', (req, res) => {
  let game = {
    id: req.params.gameId
  }
  res.render('games/show', {
    game: game
  });
});


server.listen(server.get('port'), () => {
  console.log('starting server at http://localhost:'+server.get('port'))
});
