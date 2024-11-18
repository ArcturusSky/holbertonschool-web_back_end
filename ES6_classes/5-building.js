export default class Building {
  constructor(sqft) {
    // Check if NOT an instance of Building itself AND doesn't overwrite the required method
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    if (typeof sqft !== 'number') throw new Error('TypeError: sqft must be a number');
    this._sqft = sqft; // eslint-disable-line no-underscore-dangle
  }

  // Getter&Setter for sqft
  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }

  set sqft(newsqft) {
    if (typeof newsqft !== 'number') {
      throw new Error('TypeError: sqft must be a string');
    }
    this._sqft = newsqft; // eslint-disable-line no-underscore-dangle
  }
}
