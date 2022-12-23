const http = require('http');

// Crete server object that takes in function
http.createServer((req, res) => {
    // Write response
    res.write('Hello world');
    res.end();
}).listen(5000, () => console.log('Server running'));