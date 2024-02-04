import { BankAccount, valueError } from './bank-account';

describe('Bank account', () => {
  test('newly opened ACCOUNT has zero balance', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    expect(ACCOUNT.balance).toEqual(0);
  });

  test('can deposit money', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    ACCOUNT.deposit(100);
    expect(ACCOUNT.balance).toEqual(100);
  });

  test('can deposit money sequentially', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    ACCOUNT.deposit(100);
    ACCOUNT.deposit(50);
    expect(ACCOUNT.balance).toEqual(150);
  });

  test('can withdraw money', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    ACCOUNT.deposit(100);
    ACCOUNT.withdraw(50);
    expect(ACCOUNT.balance).toEqual(50);
  });

  test('can withdraw money sequentially', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    ACCOUNT.deposit(100);
    ACCOUNT.withdraw(20);
    ACCOUNT.withdraw(80);
    expect(ACCOUNT.balance).toEqual(0);
  });

  test('checking balance of closed account throws error', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    ACCOUNT.close();
    expect(() => ACCOUNT.balance).toThrow(valueError);
  });

  test('deposit into closed account throws error', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    ACCOUNT.close();
    expect(() => {
      ACCOUNT.deposit(50);
    }).toThrow(valueError);
  });

  test('withdraw from closed account throws error', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    ACCOUNT.close();
    expect(() => {
      ACCOUNT.withdraw(50);
    }).toThrow(valueError);
  });

  test('close already closed account throws error', () => {
    const ACCOUNT = new BankAccount();
    expect(() => {
      ACCOUNT.close();
    }).toThrow(valueError);
  });

  test('open already opened account throws error', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    expect(() => {
      ACCOUNT.open();
    }).toThrow(valueError);
  });

  test('reopened account does not retain balance', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    ACCOUNT.deposit(50);
    ACCOUNT.close();
    ACCOUNT.open();
    expect(ACCOUNT.balance).toEqual(0);
  });

  test('cannot withdraw more than deposited', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    ACCOUNT.deposit(25);
    expect(() => {
      ACCOUNT.withdraw(50);
    }).toThrow(valueError);
  });

  test('cannot withdraw negative amount', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    ACCOUNT.deposit(100);
    expect(() => {
      ACCOUNT.withdraw(-50);
    }).toThrow(valueError);
  });

  test('cannot deposit negative amount', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    expect(() => {
      ACCOUNT.deposit(-50);
    }).toThrow(valueError);
  });

  test('changing balance directly throws error', () => {
    const ACCOUNT = new BankAccount();
    ACCOUNT.open();
    expect(() => {
      ACCOUNT.balance = 100;
    }).toThrow(Error);
  });
});
