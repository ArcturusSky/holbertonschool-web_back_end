export default class HolbertonClass {
  constructor(size, location) {
    this._size = size; // eslint-disable-line no-underscore-dangle
    this._location = location; // eslint-disable-line no-underscore-dangle
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size; // eslint-disable-line no-underscore-dangle
    }
    if (hint === 'string') {
      return this._location; // eslint-disable-line no-underscore-dangle
    }
    return null;
  }
}
