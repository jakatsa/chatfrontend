import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthentication } from "../Auth";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuthentication();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated === null) return; // Wait for authentication check to complete

    if (!isAuthenticated) {
      navigate("/login");
    } else if (
      isAuthenticated &&
      (window.location.pathname === "/login" ||
        window.location.pathname === "/register")
    ) {
      navigate("/chats");
    }
  }, [isAuthenticated, navigate]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    // Do not render children if user is unauthenticated
    return null;
  }

  // Render children if authenticated
  return children;
}

export default ProtectedRoute;
