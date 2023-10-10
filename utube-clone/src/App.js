import "./App.css";
import PrivateRoutes from "./components/PrivateRoutes";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
