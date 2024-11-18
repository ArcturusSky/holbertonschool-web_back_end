export default class HolbertonCourse {
  constructor(name, length, students) {
    // Check if all attribute are what they are supposed to be
    if (typeof name !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    // Note: Added "Number." before "isNaN" as required by lint
    if (typeof length !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }

    // Note: "!" means "NOT" so "if (!condition)" means "if not condition"
    if (!Array.isArray(students)) {
      throw new Error(' TypeError: Students must be an array');
    }

    // Check if EACH elements of "students" is a string. Using "forEach" preformated option
    students.forEach((student) => {
      if (typeof student !== 'string') {
        throw new Error('TypeError: Students must be an array of strings');
      }
    });

    this._name = name; // eslint-disable-line no-underscore-dangle
    this._length = length; // eslint-disable-line no-underscore-dangle
    this._students = students; // eslint-disable-line no-underscore-dangle
  }

  // Getter&Setter for name
  get name() {
    return this._name; // eslint-disable-line no-underscore-dangle
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._name = newName; // eslint-disable-line no-underscore-dangle
  }

  // Getter&Setter for length
  get length() {
    return this._length; // eslint-disable-line no-underscore-dangle
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new Error('TypeError: Length must be a number');
    }
    this._length = newLength; // eslint-disable-line no-underscore-dangle
  }

  // Getter&Setter for students
  get students() {
    return this._students; // eslint-disable-line no-underscore-dangle
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new Error(' TypeError: Students must be an array');
    }

    newStudents.forEach((newStudent) => {
      if (typeof newStudent !== 'string') {
        throw new Error('TypeError: Students must be an array of strings');
      }
    });
    this._students = newStudents; // eslint-disable-line no-underscore-dangle
  }
}
