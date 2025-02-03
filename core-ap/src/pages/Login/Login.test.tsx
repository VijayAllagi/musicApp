import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';
import { ROLES } from '../../auth/auth';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Login Component', () => {
  const mockLogin = jest.fn();
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders Login component', () => {
    render(<Login login={mockLogin} />);
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
    expect(screen.getByText(/Login as Admin/i)).toBeInTheDocument();
    expect(screen.getByText(/Login as User/i)).toBeInTheDocument();
  });

  test('calls login function with admin role and navigates to home', async () => {
    render(<Login login={mockLogin} />);
    const adminButton = screen.getByText(/Login as Admin/i);
    fireEvent.click(adminButton);

    expect(mockLogin).toHaveBeenCalledWith(ROLES.ADMIN);
    await screen.findByText(/Login/i); // Wait for the login process to complete
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });

  test('calls login function with user role and navigates to home', async () => {
    render(<Login login={mockLogin} />);
    const userButton = screen.getByText(/Login as User/i);
    fireEvent.click(userButton);

    expect(mockLogin).toHaveBeenCalledWith(ROLES.USER);
    await screen.findByText(/Login/i); // Wait for the login process to complete
    expect(mockNavigate).toHaveBeenCalledWith('/');
  });
});