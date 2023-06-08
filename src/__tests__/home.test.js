import React from 'react';
import { render } from '@testing-library/react';
import Home from '../components/Home';

describe('it should show content when the user enters the Math home page', () => {
  it('displays the content correctly', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
