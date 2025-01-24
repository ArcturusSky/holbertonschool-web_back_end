// Module to create a more complexe server

const http = require('http');
const countStudents = require('./3-read_file_async');

const database = process.argv[2];
let logMessages = ''; // temp variable to hold the response of the promise

// create a server object
const app = http.createServer((route, resolution) => {
  // convert console log into resolution.write and store the result
  console.log = (message) => {
    logMessages += `${message}\n`;
  };

  // Processing routes now
  if (route.url === '/') {
    resolution.write('Hello Holberton School!'); // Welcome message
    resolution.end(); // end the response
  } else if (route.url === '/students') {
    countStudents(database)
      .then(() => {
        resolution.write('This is the list of our students\n');
        resolution.write(logMessages); // use of the temp variable to ensure right place
        resolution.end();
      })
      .catch(() => {
        resolution.write('Cannot load the database'); // Message d'erreur
        resolution.end();
      });
  }
}).listen(1245);

module.exports = app;
