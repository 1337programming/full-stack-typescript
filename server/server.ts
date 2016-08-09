declare let require: any;

import {StreamEmitter} from './src/stream-emitter';
import {Interceptor} from './src/interceptor';

let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let streamEmitter = new StreamEmitter();
let interceptor = new Interceptor(streamEmitter);

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  let subcription = streamEmitter.listen('Message', (message) => {
    console.log(`${new Date()}: Message ${message}`);
    io.emit('EmitTweet', message);
  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
    subcription.dispose();
  });
  
  socket.on('tweet', function (msg) {
    console.log('message: ' + msg);
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
