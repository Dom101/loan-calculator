import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app title', () => {
  const wrapper = render(<App />);
  expect(wrapper.getByText('Loan Calculator')).toBeTruthy();
});

test('renders the loan input fields', async () => {
  const wrapper = render(<App />);
  expect(wrapper.getByText('Amount Requested')).toBeTruthy();
  expect(wrapper.getByText('£')).toBeTruthy();
  expect(wrapper.getByText('Duration')).toBeTruthy();
  expect(wrapper.getByText('months')).toBeTruthy();
});

test('renders rcf', async () => {
  const wrapper = render(<App />);
  expect(wrapper.getByText('Revolving Credit Facility')).toBeTruthy();
});

test('renders bl', async () => {
  const wrapper = render(<App />);
  expect(wrapper.getByText('Business Loan')).toBeTruthy();
});
