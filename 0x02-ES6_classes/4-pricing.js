import Currency from './3-currency';

export default class Pricing {
  constructor(amount, curreny) {
    this.amount = amount;
    this.curreny = curreny;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('amount must be a number');
    }
    this._amount = value;
  }

  get curreny() {
    return this._curreny;
  }

  set curreny(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('currency must be a Currency');
    }
    this._curreny = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number') {
      throw new TypeError('amount must be a number');
    }
    if (typeof conversionRate !== 'number') {
      throw new TypeError('conversionRate must be a number');
    }
    return amount * conversionRate;
  }
}
