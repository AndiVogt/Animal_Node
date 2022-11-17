const http = require('http');
const fs = require('fs');
const _ = require('lodash');


// what is actually going on in the server
async function requestListener (req, res) {
    // prints req data
    // console.log(req.url);

    // lodash (just a js-framework with some cool skills for server work)
    // const num = _.random(0, 20);
    // console.log(num);
    if (req.method === 'POST') {
        var body = "Body: ";
        req.on("data", function (chunk) {
            body += chunk;
            console.log(body);
        });
        res.end('worked')
    }
    
    

    // gives a response, if there is a get-request
    if (req.method === 'GET') {
        // defines the response type
        res.setHeader('Content-Type', 'text/html')
        // defines the response data

        try {
            const database = client.db('Webshop-DEV');
            const movies = database.collection('Users');
            const query = { _id: 'Niklas@gmail.com' };
            const user = await user.findOne(query);
            console.log(user);
        } finally {
            // Ensures that the client will close when you finish/error
            await client.close();
        }

        // ------------------------- //
        // --- FELIX : Here you have to define the DATABASE RES --- //
        // ------------------------- //

        // defines the routes the server can deal with
        let path = './views/'
        if (req.url == '/') {
            path += 'index.html'
            res.statusCode = 200;
        } else if (req.url == '/about') {
            path += 'about.html'
            res.statusCode = 200;
        // make a redirection if different urls should link to the same page
        } else if (req.url == '/about-us') {
            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end()
        } else if (req.url == '/blogs') {
            path += 'blogs.html'
            res.statusCode = 200;
        } else {
            path += 'error.html'
            res.statusCode = 404;
        }

        // response a html formular
        fs.readFile(path, (err, data) => {
            if (err) {
                console.log(err);
                res.end('response err')
            } else {
                res.end(data)
            }
        })
    }
};

// Server get created
const server = http.createServer(requestListener);

// Server listens to port 8080
server.listen(8080, () => {
    console.log('listening for requests on port 8080')
}) 