import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {login as loginAuth, logout as logoutAuth, getUserRoles, isAuthenticated, Role } from "./auth/auth";
import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login";


const App: React.FC = () => {
  const [auth, setAuth] = useState<{
    isAuthenticated: boolean;
    role: Role | null;
  }>({
    isAuthenticated: false,
    role: null,
  });


  const login = async (role: Role) => {
    const token = await loginAuth(role);
    const authenticated = await isAuthenticated(token);
    const roles = await getUserRoles(token);
    if (authenticated && roles) {
      setAuth({ isAuthenticated: true, role: role });
    }
    return token;
  };

  const logout = () => {
    logoutAuth();
    setAuth({ isAuthenticated: false, role: null });
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <Routes>
          <Route path="/login" element={<Login login={login} />} />
          <Route
          path="/"
          element={
            auth.isAuthenticated ? (
              <Home role={auth.role}  logout={logout} />
            ) : (
              <Login  login={login}/>
            )
          }
        />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
