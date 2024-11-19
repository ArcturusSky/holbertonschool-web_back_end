export default function
getStudentsByLocation(StudentsList, city) { // eslint-disable-line no-unused-vars
  const StudentByLocation = StudentsList.filter((student) => student.location === city);
  return StudentByLocation;
}
