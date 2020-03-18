import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders name', () => {
  const { getByText } = render(<App />);
  const contentElement = getByText(/Cheng Fei - 费城/i);
  expect(contentElement).toBeInTheDocument();
});
