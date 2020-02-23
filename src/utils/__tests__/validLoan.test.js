import isValidLoan from '../validLoan';

describe('RCF loan', () => {
  test('when it is at the minimum for both', () => {
    const amount = '1000';
    const duration = '1';
    const result = isValidLoan(amount, duration, false);
    expect(result).toEqual(true);
  });

  test('when it is at the max for both', () => {
    const amount = '150000';
    const duration = '12';
    const result = isValidLoan(amount, duration, false);
    expect(result).toEqual(true);
  });

  test('when amount is greater than max', () => {
    const amount = '160000';
    const duration = '6';
    const result = isValidLoan(amount, duration, false);
    expect(result).toEqual(false);
  });

  test('when amount is less than min', () => {
    const amount = '200';
    const duration = '6';
    const result = isValidLoan(amount, duration, false);
    expect(result).toEqual(false);
  });

  test('when duration is less than min', () => {
    const amount = '5000';
    const duration = -1;
    const result = isValidLoan(amount, duration, false);
    expect(result).toEqual(false);
  });

  test('when duration is more than max', () => {
    const amount = '5000';
    const duration = 14;
    const result = isValidLoan(amount, duration, false);
    expect(result).toEqual(false);
  });

});
describe('BL loan', () => {
  test('when it is at the minimum for both', () => {
    const amount = '10000';
    const duration = '1';
    const result = isValidLoan(amount, duration, true);
    expect(result).toEqual(true);
  });

  test('when it is at the max for both', () => {
    const amount = '200000';
    const duration = '60';
    const result = isValidLoan(amount, duration, true);
    expect(result).toEqual(true);
  });

  test('when amount is greater than max', () => {
    const amount = '250000';
    const duration = '16';
    const result = isValidLoan(amount, duration, true);
    expect(result).toEqual(false);
  });

  test('when amount is less than min', () => {
    const amount = '9999';
    const duration = '6';
    const result = isValidLoan(amount, duration, true);
    expect(result).toEqual(false);
  });

  test('when duration is less than min', () => {
    const amount = '15000';
    const duration = -1;
    const result = isValidLoan(amount, duration, true);
    expect(result).toEqual(false);
  });

  test('when duration is more than max', () => {
    const amount = '15000';
    const duration = 70;
    const result = isValidLoan(amount, duration, true);
    expect(result).toEqual(false);
  });

});