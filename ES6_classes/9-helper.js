export default class HolbertonClass {
  constructor(year, location) {
    this._year = year; // eslint-disable-line no-underscore-dangle
    this._location = location; // eslint-disable-line no-underscore-dangle
  }

  get year() {
    return this._year; // eslint-disable-line no-underscore-dangle
  }

  get location() {
    return this._location; // eslint-disable-line no-underscore-dangle
  }
}
