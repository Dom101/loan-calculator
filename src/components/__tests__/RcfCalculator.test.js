import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import RcfCalculator from '../RcfCalculator';

test('renders the interest input fields', () => {
  const wrapper = render(<RcfCalculator />);
  expect(wrapper.getByText('Interest Rate')).toBeTruthy();
  expect(wrapper.getByText('%')).toBeTruthy();
});

test('renders the RCF Title', () => {
  const wrapper = render(<RcfCalculator />);
  expect(wrapper.getByText('Revolving Credit Facility')).toBeTruthy();
});

test('sets the default interest rate to 3', () => {
  const wrapper = render(<RcfCalculator />);
  const input = wrapper.getByTestId('interestInput');
  expect(input.value).toBe('3');
});

test('Modify the interest field', async () => {
  const wrapper = render(<RcfCalculator />);
  const input = wrapper.getByTestId('interestInput');
  fireEvent.change(input, { target: { value: '6' } })
  expect(input.value).toBe('6');
});

test('renders the loan table', async () => {
  const wrapper = render(<RcfCalculator />);
  expect(wrapper.getByText('Repayment Date')).toBeTruthy();
  expect(wrapper.getByText('Principle')).toBeTruthy();
  expect(wrapper.getByText('Interest')).toBeTruthy();
  expect(wrapper.getByText('Total Repayment')).toBeTruthy();
});