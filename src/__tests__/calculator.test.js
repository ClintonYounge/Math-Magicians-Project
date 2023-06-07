import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Calculator from '../components/calculator';

describe('Calculator interaction', () => {
  test('updates result when button 3 is clicked', () => {
    // Arrange
    const { getByText, getByTestId } = render(<Calculator />);

    // Act
    fireEvent.click(getByText('3'));

    // Assert
    const calculatorScreen = getByTestId('outputResult');
    expect(calculatorScreen).toHaveTextContent('3');
  });

  test('updates outputResult when buttons 2 + 4 and = are clicked', () => {
    // Arrange
    const { getByText, getByTestId } = render(<Calculator />);
    // Act
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('='));
    // Assert
    const calculatorScreen = getByTestId('outputResult');
    expect(calculatorScreen).toHaveTextContent('6');
  });

  test('updates outputResult when buttons 2 x 4 and = are clicked', () => {
    // Arrange
    const { getByText, getByTestId } = render(<Calculator />);
    // Act
    fireEvent.click(getByText('2'));
    fireEvent.click(getByText('x'));
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('='));
    // Assert
    const calculatorScreen = getByTestId('outputResult');
    expect(calculatorScreen).toHaveTextContent('8');
    expect(calculatorScreen).toMatchSnapshot();
  });
});
