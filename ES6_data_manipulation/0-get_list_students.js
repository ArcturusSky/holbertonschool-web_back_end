export default function getListStudents() { // eslint-disable-line no-unused-vars
  const StudentList = [];

  const student1 = {
    firstname: 'Guillaume',
    id: 1,
    location: 'San Francisco',
  };
  const student2 = {
    firstname: 'James',
    id: 2,
    location: 'Columbia',
  };
  const student3 = {
    firstname: 'Serena',
    id: 5,
    location: 'San Francisco',
  };
  StudentList.push(student1, student2, student3);
  return StudentList;
}
