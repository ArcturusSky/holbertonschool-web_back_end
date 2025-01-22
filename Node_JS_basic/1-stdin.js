// Program that will accept a name and display it

// 'process' displays a welcome message to stdout
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// 'process' sets the encoding of the input to 'utf8',
// so the data will be read as a string instead of binary
process.stdin.setEncoding('utf8');

// Listen for readable data in the input
// and store it in 'givenName' when available
process.stdin.on('readable', () => {
  const givenName = process.stdin.read();

  // If a string is given, display a message plus the string
  if (givenName !== null) {
    process.stdout.write(`Your name is: ${givenName}`);
  }
});

// Close the program and display an ending message
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
