import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("accessToken") || null
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
