import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("accessToken")
  );
  const navigate = useNavigate();
  const login = () => {
    navigate("/home");
    setIsLoggedIn(true);
  };
  const logout = () => {
    navigate("/");
    setIsLoggedIn(false);
    localStorage.removeItem("accessToken");
  };
  useEffect(() => {
    localStorage.setItem(
      "dummyToken",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5ZWJkZjNhYS1jOGZmLTQ1ZDktODU0OC00MDUzNWRjYjhhNjYiLCJlbWFpbCI6InRlc3RAZXhhbXBsZS5jb20iLCJpYXQiOjE2OTY0MjYzMzAsImV4cCI6MTcyNzk4MzI1Nn0.z8vPbRPPfBUcVDHV6kvJQEfmHCQjH38GO47EqV7hYdI"
    );
  });
  const value = useMemo(
    () => ({
      isLoggedIn,
      login,
      logout,
    }),
    [isLoggedIn]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContext;
