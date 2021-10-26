// const express = require('express');

// const app = express();

// app.get('/', function(rea, res){
//     res.send("Hello World");
// });

// app.listen(80);

const { response } = require('express');
const http = require('http');

// let movieList = [
//     {
//       id: "0",
//       song: "Aik Alif",
//       url: "http://hck.re/Rh8KTk",
//       artist : "Momina",
//       image : "http://hck.re/kWWxUI"
//     }
//   ];

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("OK");
    // response.status(200).send(movieDetail);
});

const port = process.env.PORT || 1311;
server.listen(port);

console.log("run at", port);