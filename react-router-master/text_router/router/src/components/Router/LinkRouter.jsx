import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import HomePage from "../Page/HomePage";
import AboutPage from "../Page/AboutPage";
import ContactPage from "../Page/ContactPage";
import Navigation from "../Navigation";

export default function LinkRouter() {
  return (
    <>
      {/* Trường hợp khi đặt ở ngoài Browser Router */}
      {/* <Navigation /> */}
      <BrowserRouter>
        {/* Trường hợp đặt bên trong định tuyến và chạy vào */}
        <Navigation />

        <Routes
          basepath="/my-app"
          sensitive={false}
          caseSensivtive={true}
          matchTrailingSlash={true}
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
