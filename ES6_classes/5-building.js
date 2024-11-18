export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = sqft; // eslint-disable-line no-underscore-dangle

    if (this.evacuationWarningMessage === undefined) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter&Setter for sqft
  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }

  set sqft(newsqft) {
    if (typeof newsqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }
    this._sqft = newsqft; // eslint-disable-line no-underscore-dangle
  }
}
