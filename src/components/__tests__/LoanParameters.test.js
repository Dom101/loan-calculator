import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import LoanParameters from '../LoanParameters';
import LoanProvider from '../../modules/Loan/Provider';

function renderWrapper() {
  return render(
    <LoanProvider>
      <LoanParameters />
    </LoanProvider>
  );
}

test('renders the loan input fields', async () => {
  const wrapper = renderWrapper();
  expect(wrapper.getByText('Amount Requested')).toBeTruthy();
  expect(wrapper.getByText('£')).toBeTruthy();
  expect(wrapper.getByText('Amount Requested')).toBeTruthy();
  expect(wrapper.getByText('months')).toBeTruthy();
});

test('Modify the amount fields', async () => {
  const wrapper = renderWrapper();
  const input = wrapper.getByTestId('amountInput');
  fireEvent.change(input, { target: { value: '5000' } })
  expect(input.value).toBe('5000')
});

test('Modify the duration field', async () => {
  const wrapper = renderWrapper();
  const input = wrapper.getByTestId('durationInput');
  fireEvent.change(input, { target: { value: '24' } })
  expect(input.value).toBe('24')
});