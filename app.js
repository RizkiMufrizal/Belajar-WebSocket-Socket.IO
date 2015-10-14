'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require('path');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require('express').static(path.join(__dirname, 'public')));
app.use(require('express').static(path.join(__dirname, 'bower_components')));

app.get('/', function(req, res) {
  return res.render('index');
});

io.on('connection', function(socket) {
  socket.on('chat:pesan', function(pesan) {
    io.emit('chat:pesan', pesan);
  });
});

http.listen(app.get('port'), function() {
  console.log('Server jalan di port ' + app.get('port'));
});
