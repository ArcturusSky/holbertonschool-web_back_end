export default function createEmployeesObject(departmentName, employees) {
  const staff = { [departmentName]: employees };
  return staff;
}
