export default class Currency {
  constructor(code, name) {
    // Check if all attribute are what they are supposed to be
    if (typeof code !== 'string') {
      throw new Error('TypeError: Code must be a string');
    }
    if (typeof name !== 'string') {
      throw new Error('TypeError: Name must be a string');
    }
    this._code = code; // eslint-disable-line no-underscore-dangle
    this._name = name; // eslint-disable-line no-underscore-dangle
  }

  // Getter&Setter for code
  get code() {
    return this._code; // eslint-disable-line no-underscore-dangle
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new Error('TypeError: Code must be a string');
    }
    this._code = newCode; // eslint-disable-line no-underscore-dangle
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

  displayFullCurrency() {
    return `${this._name} (${this._code})`; // eslint-disable-line no-underscore-dangle
  }
}
