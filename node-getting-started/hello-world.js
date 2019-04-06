// basic web server!

// require is what you use to manage dependencies!
// 
const http = require('http');

// creates a server by calling create server on the http module
// 
const server = http.createServer((req, res) => {
    res.end('Hello World\n');
});

//creates a server on the specified port 
// 
server.listen(4242, () => {
    console.log('====================================');
    console.log('Server is running...');
    console.log('====================================');
});