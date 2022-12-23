let http = require('http'); //grab module

//Function passing in function, accepts two parameters
http.createServer(function(req, res){
    //Send response to client
    res.end("Welcome Bacien!!");

    //have to close like sockets
    //res.end();

}).listen(8080);