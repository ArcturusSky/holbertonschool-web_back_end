const http = require('http');

// create a server object
const app = http.createServer((req, resolution) => {
  resolution.write('Hello Holberton School!'); // write a response
  resolution.end(); // end the response
}).listen(1245);

module.exports = app;
