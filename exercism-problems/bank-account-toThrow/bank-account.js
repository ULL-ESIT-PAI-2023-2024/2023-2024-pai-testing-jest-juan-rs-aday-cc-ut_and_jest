'use strict';

/**
 * @desc Represents a simple bank account with basic operations.
 */
export class BankAccount {
  /**
   * @desc Initializes a new BankAccount with a null balance.
   */
  constructor() {
    this._balance = null;
  }

  /**
   * @desc Opens the bank account by setting the balance to 0.
   * @throws {valueError} If the account is already open.
   */
  open() {
    if (this._balance !== null) { throw new valueError; }
    this._balance = 0;
  }

  /**
   * @desc Closes the bank account by setting the balance to null.
   * @throws {valueError} If the account is already closed.
   */
  close() {
    if (this._balance === null) { throw new valueError; }
    this._balance = null;
  }

  /**
   * @desc Deposits the specified amount into the account.
   * @param {number} amount - The amount to deposit.
   * @throws {valueError} If the account is closed or the amount is negative.
   */
  deposit(amount) {
    if (this._balance === null || amount < 0) { throw new valueError; }
    this._balance += amount;
  }

  /**
   * @desc Withdraws the specified amount from the account.
   * @param {number} amount - The amount to withdraw.
   * @throws {valueError} If the account is closed, the amount is negative, or there are insufficient funds.
   */
  withdraw(amount) {
    if (this._balance === null || amount < 0 || this._balance < amount) { throw new valueError; }
    this._balance -= amount;
  }

  /**
   * @desc Gets the current balance of the account.
   * @throws {valueError} If the account is closed.
   * @returns {number} The current balance.
   */
  get balance() {
    return this._balance ?? (() => { throw new valueError; })();
  }
}

/**
 * @desc Custom error class for bank account-related errors.
 */
export class valueError extends Error {
  /**
   * @desc Initializes a new valueError with a default error message.
   */
  constructor() {
    super('Bank account error');
  }
}
