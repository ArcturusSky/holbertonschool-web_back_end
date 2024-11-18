export default class Airport {
  constructor(name, code) {
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

  toString() {
    return `[object ${this._code}]`; // eslint-disable-line no-underscore-dangle
  }
}
