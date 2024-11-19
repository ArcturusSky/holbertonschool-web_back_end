export default function
getStudentsByLocation(StudentsList, city) { // eslint-disable-line no-unused-vars
  const StudentByLocation = StudentsList.filter((SutdentsList) => SutdentsList.location === city);
  return StudentByLocation;
}
