import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors; // eslint-disable-line no-underscore-dangle
  }

  // Getter for floors
  get floors() {
    return this._floors; // eslint-disable-line no-underscore-dangle
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`; // eslint-disable-line no-underscore-dangle
  }
}
