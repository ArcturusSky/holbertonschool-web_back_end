// function that will read a database and count students asynchronusly

// Importe "fs" module (that means File system)
const fs = require('fs');

function countStudents(file) {
  const myPromise = new Promise((resolve, reject) => {
    // Read the file asynchronously
    fs.readFile(file, 'utf8', (error, database) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        // Separate by lines
        const lines = database.split('\n');

        // Ignore empty lines
        const validLines = lines.filter((line) => line.trim() !== '');

        // Cut each lines in columns to get students
        const students = validLines.map((line) => line.split(','));

        // List of list of students by fields
        const studentsGroupedByField = {};

        // Iterate over the students array
        students.forEach(([firstname, name, age, field]) => { // eslint-disable-line no-unused-vars
          // if given field isn't already in "studentsGroupedByField"
          // add the given field to create a new field that will hold
          // a student list.
          if (!studentsGroupedByField[field]) studentsGroupedByField[field] = [];

          // Add the student firstname to the appropriate field
          studentsGroupedByField[field].push(firstname);
        });

        // Log the total number of students
        console.log(`Number of students: ${students.length - 1}`);

        // Log the number of students in each field
        Object.entries(studentsGroupedByField).forEach(([field, firstnameList], index) => {
          // skip first iteration
          if (index === 0) return;

          console.log(
            `Number of students in ${field}: ${firstnameList.length}. List: ${firstnameList.join(', ')}`,
          );
        });

        resolve(); // Resolve the promise once everything is done
      }
    });
  });

  return myPromise;
}

module.exports = countStudents;
