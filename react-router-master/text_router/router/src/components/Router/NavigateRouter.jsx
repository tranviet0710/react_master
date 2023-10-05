import React from "react";
import { useNavigate, Routes, Route } from "react-router-dom";
import HomePage from "../Page/HomePage";
import AboutPage from "../Page/AboutPage";
import ContactPage from "../Page/ContactPage";
export default function NavigateRouter() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ textAlign: "center" }}>Navigate Router</h1>
      <button
        style={{
          padding: "10px 20px",
          fontSize: "1.2rem",
          marginBottom: "20px",
        }}
        onClick={handleButtonClick}
      >
        Chuyển hướng
      </button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}
