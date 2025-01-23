const app = require('http');

// create a server object
app.createServer((req, resolution) => {
  resolution.write('Hello Holberton School!'); // write a response
  resolution.end(); // end the response
}).listen(1245);
