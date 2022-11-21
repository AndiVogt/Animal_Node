// TODO: Try soxket -> https://docs.python.org/3/howto/sockets.html
const http = require('http');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const port = 3000;
const app = express();
const server = http.createServer(function(req, res) {
  
  console.log(req.headers);

  res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
  res.write("Formular übermittelt");
  res.end('End of Message to Browser!');
});

app.use(cors({
  origin: "*",
}))


server.listen(port, function() {
  console.log("listening on Port 3000");
})