// function that will read a database and count students

// Importe "fs" module (that means File system)
const fs = require('fs');

function countStudents(file) {
  let database = 'x';
  // try to manage errors if doesn't work
  try {
    // Read the file synchronously
    database = fs.readFileSync(file, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  // Separate by lines
  const lines = database.split('\n');

  // Ignore empty lines
  const validLines = lines.filter((line) => line.trim() !== '');

  // Cut each lines in columns to get students
  const students = validLines.map((line) => line.split(','));

  // List of list of students by fields
  const studentsGroupedByField = {};

  // Iterate over the students array
  students.forEach(([firstname, lastname, age, field]) => { // eslint-disable-line no-unused-vars
    // if given field isn't already in "studentsGroupedByField"
    // add the given field to create a new field that will hold
    // a student list.
    if (!studentsGroupedByField[field]) studentsGroupedByField[field] = [];

    // Add the student firstname to the appropriate field
    studentsGroupedByField[field].push(firstname);
  });
// Once the iteration is complete, log the results

// Log the total number of students
process.stdout.write(`Number of students: ${students.length}\n`);

// Log the number of students in each field
Object.entries(studentsGroupedByField).forEach(([field, firstnameList], index) => {
    // skip first iteration
    if (index === 0) return;

    process.stdout.write(
        `Number of students in ${field}: ${firstnameList.length}. List: ${firstnameList.join(', ')}\n`
    );
});
}

module.exports = countStudents;
