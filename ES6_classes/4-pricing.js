import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new Error('TypeError: Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new Error('TypeError: currency must be an instance of Currency');
    }

    this._amount = amount; // eslint-disable-line no-underscore-dangle
    this._currency = currency; // eslint-disable-line no-underscore-dangle
  }

  // Getter&Setter for amount
  get amount() {
    return this._amount; // eslint-disable-line no-underscore-dangle
  }

  set amount(newamount) {
    if (typeof newamount !== 'number') {
      throw new Error('TypeError: Amount must be a string');
    }
    this._amount = newamount; // eslint-disable-line no-underscore-dangle
  }

  // Getter&Setter for currency
  get currency() {
    return this._currency; // eslint-disable-line no-underscore-dangle
  }

  set currency(newcurrency) {
    if (!(newcurrency instanceof Currency)) {
      throw new Error('TypeError: currency must be a string');
    }
    this._currency = newcurrency; // eslint-disable-line no-underscore-dangle
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`; // eslint-disable-line no-underscore-dangle
  }

  static converPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
