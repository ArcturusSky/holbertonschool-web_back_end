export default function getListStudentIds(StudentsList) { // eslint-disable-line no-unused-vars
  const SumIds = StudentsList.reduce((total, student) => total + student.id, 0);
  return SumIds;
}
