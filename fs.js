// TODO: Try soxket -> https://docs.python.org/3/howto/sockets.html
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res) {
  console.log(req.headers);
});

server.listen(port, function() {
  console.log("listening on Port 3000");
})