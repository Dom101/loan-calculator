import MockDate from 'mockdate';

import repaymentCalculator from '../repaymentCalculator';

beforeAll(() => {
  MockDate.set('2020-01-01T12:00:00.000Z');
});

describe('RCF repayment calculator', () => {
  test('when there is a single month', () => {
    const amount = '1000';
    const duration = '1';
    const interest = '3';
    const result = repaymentCalculator(amount, duration, interest);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      date: "1/2/2020",
      principle: 1000,
      interest: 30,
      repayment: 1030,
    });
    expect(result[1]).toEqual({
      date: "Total",
      principle: "1000",
      interest: 30,
      repayment: 1030,
    });
  });

  test('when there are 2 months', () => {
    const amount = '1000';
    const duration = '2';
    const interest = '3';
    const result = repaymentCalculator(amount, duration, interest);

    expect(result).toHaveLength(3);
    expect(result[0]).toEqual({
      date: "1/2/2020",
      principle: 500,
      interest: 30,
      repayment: 530,
    });
    expect(result[1]).toEqual({
      date: "1/3/2020",
      principle: 500,
      interest: 15,
      repayment: 515,
    });
    expect(result[2]).toEqual({
      date: "Total",
      principle: "1000",
      interest: 45,
      repayment: 1045,
    });
  });

  test('when there are multiple months', () => {
    const amount = '1000';
    const duration = '4';
    const interest = '5';
    const result = repaymentCalculator(amount, duration, interest);

    expect(result).toHaveLength(5);
    expect(result[0]).toEqual({
      date: "1/2/2020",
      principle: 250,
      interest: 50,
      repayment: 300,
    });
    expect(result[1]).toEqual({
      date: "1/3/2020",
      principle: 250,
      interest: 37.5,
      repayment: 287.5,
    });
    expect(result[2]).toEqual({
      date: "1/4/2020",
      principle: 250,
      interest: 25,
      repayment: 275,
    });
    expect(result[3]).toEqual({
      date: "1/5/2020",
      principle: 250,
      interest: 12.5,
      repayment: 262.5,
    });
    expect(result[4]).toEqual({
      date: "Total",
      principle: "1000",
      interest: 125,
      repayment: 1125,
    });
  });
});

describe('BL repayment calculator', () => {
  test('when there is a single month', () => {
    const amount = '1000';
    const duration = '1';
    const interest = '3';
    const result = repaymentCalculator(amount, duration, interest, true);

    expect(result).toHaveLength(2);
    expect(result[0]).toEqual({
      date: "1/2/2020",
      principle: 1000,
      interest: 130,
      repayment: 1130,
    });
    expect(result[1]).toEqual({
      date: "Total",
      principle: "1000",
      interest: 130,
      repayment: 1130,
    });
  });

  test('when there are 2 months', () => {
    const amount = '1000';
    const duration = '2';
    const interest = '3';
    const result = repaymentCalculator(amount, duration, interest, true);

    expect(result).toHaveLength(3);
    expect(result[0]).toEqual({
      date: "1/2/2020",
      principle: 500,
      interest: 130,
      repayment: 630,
    });
    expect(result[1]).toEqual({
      date: "1/3/2020",
      principle: 500,
      interest: 15,
      repayment: 515,
    });
    expect(result[2]).toEqual({
      date: "Total",
      principle: "1000",
      interest: 145,
      repayment: 1145,
    });
  });

  test('when there are multiple months', () => {
    const amount = '10000';
    const duration = '4';
    const interest = '3';
    const result = repaymentCalculator(amount, duration, interest, true);

    expect(result).toHaveLength(5);
    expect(result[0]).toEqual({
      date: "1/2/2020",
      principle: 2500,
      interest: 1300,
      repayment: 3800,
    });
    expect(result[1]).toEqual({
      date: "1/3/2020",
      principle: 2500,
      interest: 225,
      repayment: 2725,
    });
    expect(result[2]).toEqual({
      date: "1/4/2020",
      principle: 2500,
      interest: 150,
      repayment: 2650,
    });
    expect(result[3]).toEqual({
      date: "1/5/2020",
      principle: 2500,
      interest: 75,
      repayment: 2575,
    });
    expect(result[4]).toEqual({
      date: "Total",
      principle: "10000",
      interest: 1750,
      repayment: 11750,
    });
  });
});