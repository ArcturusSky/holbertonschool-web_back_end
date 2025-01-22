// Simple function to display a message in the STDOUT
function displayMessage(text) {
  console.log(text);
}

// For this version, for the checker, module.exports it needed
// However in usual ES6 environnement it would be just export default function
module.exports = displayMessage;
