//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class BankAccount {
  constructor() {
    this._balance = null;
  }
  open() {
    if (this._balance !== null) { throw new ValueError; }
    this._balance = 0;
  }
  close() {
    if (this._balance === null) { throw new ValueError; }
    this._balance = null;
  }
  deposit(amount) {
    if (this._balance === null || amount < 0) { throw new ValueError; }
    this._balance += amount;
  }
  withdraw(amount) {
    if (this._balance === null || amount < 0 || this._balance < amount) { throw new ValueError; }
    this._balance -= amount;
  }
  get balance() {
    return this._balance ?? (() => { throw new ValueError; })();
  }
}
export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}