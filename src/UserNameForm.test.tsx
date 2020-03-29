import React from 'react';
import { render } from '@testing-library/react';
import UserNameForm from './UserNameForm';

test('renders content', () => {
  const { getByText } = render(<UserNameForm />);
  const contentElement = getByText(/提交的内容/i);
  expect(contentElement).toBeInTheDocument();
});

test('renders button', () => {
  const { getByText } = render(<UserNameForm />);
  const buttonElement = getByText(/提交/i);
  expect(buttonElement).toBeInTheDocument();
});

test('renders button', () => {
  const { getByPlaceholderText } = render(<UserNameForm />);
  const buttonElement = getByPlaceholderText(/请在这里输入用户名/i);
  expect(buttonElement).toBeInTheDocument();
});
