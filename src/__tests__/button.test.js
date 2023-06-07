import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from '../components/Button';

test('renders button with correct name', () => {
  const buttonName = 'AC';
  const { getByText } = render(<Button name={buttonName} clickHandler={() => {}} />);
  const button = getByText(buttonName);
  expect(button).toBeInTheDocument();
});

test('calls click handler when button is clicked', () => {
  const buttonName = 'AC';
  const clickHandler = jest.fn();
  const { getByText } = render(<Button name={buttonName} clickHandler={clickHandler} />);
  const button = getByText(buttonName);
  fireEvent.click(button);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
