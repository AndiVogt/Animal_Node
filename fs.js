// TODO: Try soxket -> https://docs.python.org/3/howto/sockets.html
const http = require('http');
const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;
// const server = http.createServer(function(req, res) {
  
//   console.log(req.headers);

//   res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
//   res.write("Formular übermittelt");
//   res.end('End of Message to Browser!');
// });
app.use(cors())

app.get('/', (req, res) => {
  response = res.send({
  'Get' :  'Success'
  
  })  
  console.log("Get Request Successful")
})

app.post('/post-test', (req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.hostname);
  console.log(req.body);
  res.send('Post arrived');
})



app.listen(port, () => {
  console.log("listening on Port 8080");
})
