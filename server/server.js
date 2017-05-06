var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.get('/api/welcome', (req, res) => {
  res.json({message: 'Welcome to the Server'});
});
app.listen(8081, ()=>{
  console.log('API listening on port 8081');
});

io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});