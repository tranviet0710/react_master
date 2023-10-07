import React, { useContext } from "react";
import { Navigate, Outlet, Route } from "react-router-dom";
import AuthContext from "../../store/AuthContext";

export default function PrivateRoutes({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}
