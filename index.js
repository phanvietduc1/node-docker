'use strict';
const express = require("express");
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRouters = require('./routers/baiHat-routes');

const http = require('http');
const { config } = require("process");
const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/api', studentRouters.router);

let movieList = [
  {
    id: "0",
    song: "Aik Alif",
    url: "http://hck.re/Rh8KTk",
    artist : "Momina",
    image : "http://hck.re/kWWxUI"
  }
];

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});

    response.write(request.url);

    response.end(JSON.stringify(movieList, null, 3));
});


app.get('/songs', function(req, res, next) {
  res.status(200).send("sdjhfjkdshfjk");
});

// const port = process.env.PORT || 1311;
// app.listen(port, () => {
//   console.log("run at", port);
// });

app.listen(config.port, () => console.log('listening on http://localhost:' + config.port));