import React, { lazy, Suspense } from "react";
import { Role } from "../../auth/auth";
const MusicLibrary = lazy(() => import('musicLibraryApp/MusicLibrary'));

interface HomeProps {
  role: Role | null;
  logout: () => void;
}
const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const errorHandler = (error: any) => {
      setHasError(true);
      console.error("Error loading MFE:", error);
    };

    window.addEventListener("error", errorHandler);
    return () => window.removeEventListener("error", errorHandler);
  }, []);

  if (hasError) {
    return <div>Failed to load Music Library. Please try again later.</div>;
  }

  return <>{children}</>;
};
const Home: React.FC<HomeProps> = ({ role, logout }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome, {role ? role.toUpperCase() : "Guest"}!</h1>
      {role === "admin" && <p className="mb-4">You have admin privileges.</p>}
      {role === "user" && <p className="mb-4">You are logged in as a user.</p>}
      <ErrorBoundary>

        <Suspense fallback={<div>Loading Music Library...</div>}>
          <MusicLibrary />
        </Suspense>
      </ErrorBoundary>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;