const express   = require("express");                //i.e. #include
const app       = express();                         //intialize object
const http      = require("http");                   //built in node library
const server    = http.createServer(app);             //intialize with express app

const LISTEN_PORT = 8080;                            //80  default but we use another (8080)

server.listen(LISTEN_PORT);                         //starts server
app.use(express.static(__dirname + '/public'));     //set root path to public folder

console.log("Listening on port: " + LISTEN_PORT);   //just so something happens in terminal when we run server

//these are called routes
// is the default route
app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});