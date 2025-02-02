import React from "react";
import { ROLES, Role  } from "../../auth/auth";
import { useNavigate } from "react-router-dom";

interface LoginProps {
    login: (role: Role) => void;
  }
  
  const Login: React.FC<LoginProps> = ({ login }) => {
    const navigate = useNavigate();

      const handleLogin = async (role: Role) => {
        try {
            const token = await login(role);
            console.log("Logged in successfully. Token:", token);
            navigate("/"); // Redirect to the home page
          } catch (error) {
            console.error("Login failed:", error);
          }
      };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
        onClick={() => handleLogin(ROLES.ADMIN)}
      >
        Login as Admin
      </button>
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => handleLogin(ROLES.USER)}
      >
        Login as User
      </button>
    </div>
  );
};

export default Login;
