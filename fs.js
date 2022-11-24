// TODO: Try soxket -> https://docs.python.org/3/howto/sockets.html
const fs = require('fs');
const express = require('express');
const bp = require('body-parser')
const cors = require('cors');
const app = express();
const port = 8080;
// const server = http.createServer(function(req, res) {
  
//   console.log(req.headers);

//   res.writeHead(200, "OK", {'Content-Type': 'text/plain'});
//   res.write("Formular übermittelt");
//   res.end('End of Message to Browser!');
// });
app.use(cors());
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))




app.get('/get-test', (req, res) => {
  fs.readFile("./data.json", "utf8", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    res.send(JSON.parse(jsonString));
    });
})

app.post('/post-test', (req, res) => {
  console.log(req.method);
  console.log(req.url);
  console.log(req.content);
  console.log(req.text);
  console.log(req.hostname);
  console.log(req.body);
  res.send('Post arrived');
})

app.put('/put-test', (req, res) => {
  const newJSON = req.body;
  console.log("Updated JSON vom Client:  ",newJSON)
  res.send("PUT arrived")
})



app.listen(port, () => {
  console.log("listening on Port 8080");
})
