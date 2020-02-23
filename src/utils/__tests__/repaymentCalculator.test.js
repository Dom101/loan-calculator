import repaymentCalculator from '../repaymentCalculator';

test('returns the default rows', async () => {
  const expectedResult = [
    { date: '01/01/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
    { date: '01/02/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
    { date: '01/03/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
    { date: '01/04/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
    { date: 'Total', principle: '£10,000', interest: '£750', repayment: '£10,750' },
  ];
  const result = repaymentCalculator();
  expect(result).toEqual(expectedResult);
});