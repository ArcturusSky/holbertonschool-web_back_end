export default function getListStudents() { // eslint-disable-line no-unused-vars
  const StudentList = [];

  const student1 = {
    id: 1,
    firstname: 'Guillaume',
    location: 'San Francisco',
  };
  const student2 = {
    id: 2,
    firstname: 'James',
    location: 'Columbia',
  };
  const student3 = {
    id: 5,
    firstname: 'Serena',
    location: 'San Francisco',
  };
  StudentList.push(student1, student2, student3);
  return StudentList;
}
