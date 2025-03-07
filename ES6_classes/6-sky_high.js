import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors !== 'number') throw new Error('TypeError: floors must be a number');
    this._floors = floors; // eslint-disable-line no-underscore-dangle
  }

  // Getter for sqft
  get sqft() {
    return this._sqft; // eslint-disable-line no-underscore-dangle
  }

  // Getter for floors
  get floors() {
    return this._floors; // eslint-disable-line no-underscore-dangle
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`; // eslint-disable-line no-underscore-dangle
  }
}
