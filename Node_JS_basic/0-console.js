// Simple function to display a message in the STDOUT
// with process
function displayMessage(text) {
  process.stdout.write(`${text}\n`);
}

// For this version, for the checker, module.exports it needed
// However in usual ES6 environnement it would be just export default function
module.exports = displayMessage;
