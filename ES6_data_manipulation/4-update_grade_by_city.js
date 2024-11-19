export default function updateStudentGradeByCity(StudentsList, city, newGrades) { // eslint-disable-line no-unused-vars
    
    // Step 1: Filter students based on the given city
    const StudentByLocation = StudentsList.filter((student) => student.location === city);
  
    // Step 2: Map over the filtered list to add or update grades
    const NewStudentList = StudentByLocation.map(student => {
      // Step 2.1: Find the grade object in `newGrades` for the current student
      const MatchingId = newGrades.find(ObjectFromNewGrades => ObjectFromNewGrades.studentId === student.id);
      // --> `find` searches through `newGrades` to find the grade object where `studentId`
      // matches the current `student.id`. If no match is found, it returns `undefined`.
      // This is the equivalent of saying: "Does this student have a grade in `newGrades`?"
  
      // Step 2.2: Return a new object with the grade added or default to "N/A"
      return { 
        ...student, // Copies all the student's properties
        grade: MatchingId ? MatchingId.grade : "N/A" 
        // --> If `MatchingId` exists, use its `grade` property; otherwise, assign "N/A".
        // This ensures all students from the city have a `grade` field, even if it's just "N/A".
      };
    });
  
    // Step 3: Return the final updated list of students
    return NewStudentList;
  }
  