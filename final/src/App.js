import "./App.css";
import PrivateRoutes from "./components/PrivateRoutes";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import ErrorPage from "./components/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Watch from "./components/Watch";
import Share from "./components/Share";
import Login from "./components/Login";
function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/*" element={<ErrorPage />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/watch/:id" element={<Watch />} /> */}
        <Route path="/share" element={<Share />} />
      </Route>
    </Routes>
  );
}

export default App;
