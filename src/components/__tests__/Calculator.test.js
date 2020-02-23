import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Calculator from '../Calculator';
import LoanProvider from '../../modules/Loan/Provider';

function renderWrapper(bl) {
  return render(
    <LoanProvider>
      <Calculator isBl={bl} />
    </LoanProvider>
  );
}
test('renders the interest input fields', () => {
  const wrapper = renderWrapper();
  expect(wrapper.getByText('Interest Rate')).toBeTruthy();
  expect(wrapper.getByText('%')).toBeTruthy();
});

test('renders the RCF Title when not BC', () => {
  const wrapper = renderWrapper();
  expect(wrapper.getByText('Revolving Credit Facility')).toBeTruthy();
});

test('renders the BC Title when not RCF', () => {
  const wrapper = renderWrapper(true);
  expect(wrapper.getByText('Business Loan')).toBeTruthy();
});

test('sets the default interest rate to 3', () => {
  const wrapper = renderWrapper();
  const input = wrapper.getByTestId('interestInput');
  expect(input.value).toBe('3');
});

test('Modify the interest field', async () => {
  const wrapper = renderWrapper();
  const input = wrapper.getByTestId('interestInput');
  fireEvent.change(input, { target: { value: '6' } })
  expect(input.value).toBe('6');
});

test('renders the loan table', async () => {
  const wrapper = renderWrapper();
  expect(wrapper.getByText('Repayment Date')).toBeTruthy();
  expect(wrapper.getByText('Principle')).toBeTruthy();
  expect(wrapper.getByText('Interest')).toBeTruthy();
  expect(wrapper.getByText('Total Repayment')).toBeTruthy();
});