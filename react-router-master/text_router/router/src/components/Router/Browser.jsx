import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../Page/HomePage";
import AboutPage from "../Page/AboutPage";

export default function Browser() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/about/detail" element={<Detail />} /> */}
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
  
  );
}
