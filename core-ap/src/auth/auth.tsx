import { SignJWT, jwtVerify } from "jose";

// Define allowed roles
export const ROLES = {
  ADMIN: "admin",
  USER: "user",
} as const;

// Role type based on ROLES
export type Role = typeof ROLES[keyof typeof ROLES];

// Secret key for signing the token
const SECRET_KEY = new TextEncoder().encode("your_secret_key"); // Replace with a strong key in production

// Function to generate a token for a role
export const generateToken = async (roles: Role[]): Promise<string> => {
  const payload = {
    roles,
    exp: Math.floor(Date.now() / 1000) + 60 * 60, // Token expires in 1 hour
  };

  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .sign(SECRET_KEY);
};

// Function to get roles from a token
export const getUserRoles = async (token: string): Promise<Role[] | null> => {
  try {
    const { payload } = await jwtVerify(token, SECRET_KEY);
    return (payload.roles as Role[]) || null;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};

// Check if a token is valid
export const isAuthenticated = async (token: string | null): Promise<boolean> => {
  if (!token) return false;

  try {
    await jwtVerify(token, SECRET_KEY);
    return true;
  } catch (error) {
    return false;
  }
};

// Login function (role-based)
export const login = async (role: Role): Promise<string> => {
  const token = await generateToken([role]);
  localStorage.setItem("token", token); // Store token in localStorage
  return token;
};

// Logout function
export const logout = (): void => {
  localStorage.removeItem("token");
};

// Retrieve token from localStorage
export const getToken = (): string | null => {
  return localStorage.getItem("token");
};
