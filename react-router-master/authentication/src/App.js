import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "../src/components/Home";
function App() {
  const [isLoggined, setIsLoggined] = useState(false);
  useEffect(() => {
    return () => {
      const isLoggined = localStorage.getItem("isLoggined");
      if (isLoggined === "true") {
        setIsLoggined(true);
      }
    };
  }, []);
  const loginHandler = () => {
    setIsLoggined(true);
    localStorage.setItem("isLoggined", true);
  };
  const logoutHandler = () => {
    setIsLoggined(false);
    localStorage.removeItem("isLoggined");
  };
  return (
    <>
      {!isLoggined && <Login onLogin={loginHandler} />}
      {isLoggined && <Home onLogout={logoutHandler} />}
    </>
  );
}

export default App;
