export default function
getStudentsByLocation(StudentsList, city) { // eslint-disable-line no-unused-vars
  return StudentsList.filter((student) => student.location === city);
}
