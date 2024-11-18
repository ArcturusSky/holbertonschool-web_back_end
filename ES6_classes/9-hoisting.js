import HolbertonClass from './9-helper';

const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

export class StudentHolberton {
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName; // eslint-disable-line no-underscore-dangle
    this._lastName = lastName; // eslint-disable-line no-underscore-dangle
    this._holbertonClass = holbertonClass; // eslint-disable-line no-underscore-dangle
  }

  get holbertonClass() {
    return this._holbertonClass; // eslint-disable-line no-underscore-dangle
  }

  get fullStudentDescription() {
    return `${this._firstName} ${this._lastName} - ${this._holbertonClass.year} - ${this._holbertonClass.location}`; // eslint-disable-line no-underscore-dangle
  }
}

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

export const listOfStudents = [student1, student2, student3, student4, student5];
