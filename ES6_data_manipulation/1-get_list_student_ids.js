export default function getListStudentIds(ObjectArray) { // eslint-disable-line no-unused-vars
  if (!(Array.isArray(ObjectArray))) {
    const EmptyArray = [];
    return EmptyArray;
  }
  // map allowed to select something in the objects of the array
  const simpleId = ObjectArray.map((ObjectArray) => (ObjectArray.id));
  return simpleId;
}
