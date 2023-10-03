import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Outlet,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Breadcrumb from "./Breadcrumb";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Breadcrumb />
        <Outlet />
        <Routes>
          {/* Version < 6 => component */}
          {/* Version 6 => element */}
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
