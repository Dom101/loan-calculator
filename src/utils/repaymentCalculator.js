export default function repaymentCalculator(amount, interest) {
  const repayments = [
    { date: '01/01/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
    { date: '01/02/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
    { date: '01/03/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
    { date: '01/04/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
    { date: 'Total', principle: '£10,000', interest: '£750', repayment: '£10,750' },
  ];

  return repayments;
}