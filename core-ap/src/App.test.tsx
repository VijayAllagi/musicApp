// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import App from './App';
// import * as auth from './auth/auth';

// describe("App Component", () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test('renders login page by default', () => {
//     render(
//       <Router>
//         <App />
//       </Router>
//     );
//     expect(screen.getByText(/login/i)).toBeInTheDocument();
//   });

//   test('renders home page after successful login', async () => {
//     const mockLogin = jest.spyOn(auth, 'login').mockResolvedValue('token');
//     const mockIsAuthenticated = jest.spyOn(auth, 'isAuthenticated').mockResolvedValue(true);
//     const mockGetUserRoles = jest.spyOn(auth, 'getUserRoles').mockResolvedValue(['user']);

//     render(
//       <Router>
//         <App />
//       </Router>
//     );
//   });
// });