import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders home page with help link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Help/i);
  expect(linkElement).toBeInTheDocument();
});
