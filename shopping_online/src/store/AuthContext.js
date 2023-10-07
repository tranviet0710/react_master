import { createContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("accessToken") || null
  );
  const logout = () => {
    window.location.reload();
    localStorage.removeItem("accessToken");
  };

  const login = () => {
    window.location.reload();
  };
  const value = useMemo(
    () => ({
      isLoggedIn,
      logout,
      login,
    }),
    [isLoggedIn]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
export default AuthContext;
