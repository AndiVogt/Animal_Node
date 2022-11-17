// const express = require('express');
// const bodyParser = require('body-parser');

// // setup an express app (= server)
// const app = express();

// // listen for requests
// app.listen(8080, () => {console.log('Server started on port 8080...')});


// // request handling in navigation
// app.get('/', (req, res) => {
//     // res.send('<p>homepage</p>');
//     res.send('<h1>Hello</h1>')
// })
 
// app.get('/about', (req, res) => {
//     res.sendFile('./views/about.html', { root: __dirname})
// })

// // redirections
// app.get('/about-us', (req, res) => {
//     res.redirect('/about');
// })



// app.post('/', (req, res) => {
//     // res.send(req.body);
//     res.end('arrived')
// })

// // app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// // app.use(bodyParser.raw());


// app.post('/post-test', (req, res) => {
//     console.log('No data arrived:', req.body);
//     res.sendStatus(200);
// });
















// // 404 - we dont need to define a route, because express goes down
// // through the file, looking for a route matches the request. if there
// // is no route match express is going to the bottom. but there we  
// // have the app.use function which isnt connected to an url, so the
// // callback function gets fired in every case 
// app.use((req, res) => {
//     // need to define the status code by usself, because express takes the function as
//     // a normal direction to an existing page
//     res.status(404).sendFile('./views/error.html', { root: __dirname})
// })
