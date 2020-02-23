import React from 'react';
import { render } from '@testing-library/react';

import LoanTable from '../Table';

const rows = [
  { date: '01/01/2020', principle: '£2,500', interest: '£300', repayment: '£2,800' },
  { date: '01/02/2020', principle: '£3,500', interest: '£400', repayment: '£3,800' },
  { date: '01/03/2020', principle: '£4,500', interest: '£500', repayment: '£4,800' },
  { date: '01/04/2020', principle: '£5,500', interest: '£600', repayment: '£5,800' },
  { date: 'Total', principle: '£10,000', interest: '£750', repayment: '£10,750' },
];

test('renders the loan table headers', async () => {
  const wrapper = render(<LoanTable rows={rows} />);
  expect(wrapper.getByText('Repayment Date')).toBeTruthy();
  expect(wrapper.getByText('Principle')).toBeTruthy();
  expect(wrapper.getByText('Interest')).toBeTruthy();
  expect(wrapper.getByText('Total Repayment')).toBeTruthy();
});

test.each(rows)(`Should render the values of row %#`, (row) => {
  const wrapper = render(<LoanTable rows={rows} />);
  expect(wrapper.getByText(row.date)).toBeTruthy();
  expect(wrapper.getByText(row.principle)).toBeTruthy();
  expect(wrapper.getByText(row.interest)).toBeTruthy();
  expect(wrapper.getByText(row.repayment)).toBeTruthy();
});
